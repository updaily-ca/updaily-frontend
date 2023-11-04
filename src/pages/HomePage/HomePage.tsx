import { useDocumentTitle } from "../../utils/functions";
import { useEffect, useState } from "react";
import { getFeaturedBusiness } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import useGoogleMaps from "../../App";

import { useNavigate } from "react-router";

import SearchCards from "../../components/global/SearchCards/SearchCards";
import FilterButton from "../../components/global/FilterButton/FilterButton";

import "./HomePage.scss";

import searchIcon from "../../asset/home/search-icon.png";

interface LatLng {
    lat: number;
    lng: number;
}

const HomePage = () => {
    useDocumentTitle("Home Page");

    const [newLat, setNewLat]: any = useState(0);
    const [newLng, setNewLng]: any = useState(0);

    const googleMaps = useGoogleMaps();

    const [vpNorthEast, setVpNorthEast] = useState<LatLng>({ lat: 0, lng: 0 });
    const [vpSouthWest, setVpSouthWest] = useState<LatLng>({ lat: 0, lng: 0 });

    const [isBusinessMode, setIsBusinessMode] = useState<boolean>(true);
    const toggleBusinessMode = (): void => {
        setIsBusinessMode((prevState) => !prevState);
    };

    const { data } = useQuery(getFeaturedBusiness);

    const businesses = data?.businesses?.slice(0, 4);

    const [searchTerm, setSearchTerm] = useState<string>("");

    const [location, setLocation] = useState<string>("");

    const setBusinessDetail: any = {};

    const handleCardClick = (id: any) => {
        console.log(id);
    };

    const [filteredBusinesses, setFilteredBusinesses]: any = useState(null);

    const isHomePage = true;

    const navigate = useNavigate();

    useEffect(() => {
        setFilteredBusinesses(businesses);
    }, [data]);

    const [urlLat, setUrlLat] = useState<number>(0);
    const [urlLng, setUrlLng]: any = useState<number>(0);

    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        if (googleMaps) {
            const input = document.getElementById("location");

            if (window.google && window.google.maps && window.google.maps.places) {
                const map = window.google.maps.places;
                const autocomplete = new map.Autocomplete(input, {
                    types: ["geocode"],
                    componentRestrictions: { country: "CA" },
                });

                autocomplete.addListener("place_changed", () => {
                    const place = autocomplete.getPlace();
                    if (place && place.geometry && place.geometry.location) {
                        const { lat, lng } = place.geometry.location;

                        setUrlLat(lat());
                        setUrlLng(lng());

                        setLocation(place.formatted_address);
                    }
                });
            }

            setApiLoaded(true);
        }
    }, [googleMaps]);

    if (!apiLoaded) {
        return <p>Loading...</p>;
    }

    const handleKeyPress = () => {
        if (urlLat !== 0) {
            navigate(`/explore?lat=${urlLat}&lng=${urlLng}&business=${isBusinessMode}`);
        }
    };

    return (
        <div id="p-home-page">
            {/* page - home page */}
            <section className="home-hero">
                <h1 className="home-hero__title">We make exploring Vancouver quick and easy!</h1>
                <p className="home-hero__description">Search for restaurants, events or businesses in Vancouver.</p>

                <div className="home-search">
                    <input
                        type="text"
                        className="home-search__input"
                        id="location"
                        placeholder="Search a location in Vancouver, e.g. Kitsilano"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />

                    <div className="home-search__btn">
                        <img className="home-search__btn--icon" onClick={handleKeyPress} src={searchIcon} alt="" />
                        <span className="home-search__btn--search" onClick={handleKeyPress}>
                            Search
                        </span>
                    </div>
                </div>
            </section>
            <section className="h-cc-searchcards">
                {/* home page - component container - search cards */}

                {!isBusinessMode ? (
                    <h2 className="h-cc-searchcards__title">New events to explore this week</h2>
                ) : (
                    <h2 className="h-cc-searchcards__title">New businesses to explore this week</h2>
                )}

                <SearchCards
                    setNewLat={setNewLat}
                    setNewLng={setNewLng}
                    searchTerm={searchTerm}
                    isHomePage={isHomePage}
                    handleCardClick={handleCardClick}
                    setBusinessDetail={setBusinessDetail}
                    filteredBusinesses={filteredBusinesses}
                    vpNorthEast={vpNorthEast}
                    vpSouthWest={vpSouthWest}
                    isBusinessMode={isBusinessMode}
                    businesses={businesses}
                />
            </section>

            <FilterButton isBusinessMode={isBusinessMode} toggleBusinessMode={toggleBusinessMode} />
        </div>
    );
};

export default HomePage;

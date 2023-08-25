import { useState } from "react";
import { useDocumentTitle, useToggleClass } from '../../utils/functions';
import BusinessFilter from "../../components/ExploreFilters/Business/BusinessFilter";
import EventFilter from "../../components/ExploreFilters/Event/EventFilter";
import FilterButton from "../../components/global/FilterButton/FilterButton";
import SearchCards from "../../components/global/SearchCards/SearchCards";
import { gHandleSearch, gOnSearchError, gOnSearchSuccess } from "../../utils/google";

import { businessType, eventType } from "../../utils/FormData";

import { useQuery, useLazyQuery } from "@apollo/client";
import { getFeaturedBusiness } from '../../graphql/queries';
import { getBusinessDetail } from "../../graphql/queries";

import "./ExplorePage.scss";
import Explore2Map from "../../components/ExploreMap/ExploreMap2";

const ExplorePage = () => {
    useDocumentTitle("Explore Page");

    const [address, setAddress] = useState<string>("");
    const [isFilterBusiness, setIsFilterBusiness] = useState<boolean>(false);

    const toggleBusinessMode = () => {
        setIsFilterBusiness((prevState) => !prevState);
    };

    const [isFilterButtonClicked, toggleFilterButton] = useToggleClass(false);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (address) {
            gHandleSearch(address, gOnSearchSuccess, gOnSearchError);
        }
    };

    const initialFilterState = Array.from({ length: businessType.length }, () => false);

    const [activeFilterStates, setActiveFilterStates] = useState<boolean[]>(initialFilterState);


    const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false);

    const [userLat, setUserLat] = useState<number | null>(null);
    const [userLng, setUserLng] = useState<number | null>(null);

    if ('geolocation' in navigator) {
        // Request the user's current position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setUserLat(latitude);
                setUserLng(longitude)

                setUserLocationAvailable(true);

                // console.log('coordinates set.');
            },
            (error) => {
                console.error('Error getting GPS coordinates:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not available in this browser.');
    }


    const { data } = useQuery(getFeaturedBusiness);

    // console.log(data?.businesses?.slice(0, 200))

    interface Business {
        lat: number;
        lng: number;
    }

    const locations = data?.businesses?.slice(0, 4)

    // console.log(locations);

    interface Location {
        lat: number;
        lng: number;
    }

    const [businessDetail, setBusinessDetail]: any = useState({});
    const [id, setId] = useState(0);
    const [GetBusinessDetail, { loading, data: businessData }] = useLazyQuery(getBusinessDetail, {
        variables: {
            id: id
        }
    });
    const handleMarkerClick = async (id: number) => {
        setId(id);
        await GetBusinessDetail();
        setBusinessDetail(businessData?.business);
        // console.log('heeeeeeeeeeee hi');
        // console.log('oh ya', id);
        // console.log(businessData?.business);
    }
    return (
        <div id="p-explorepage">

            <aside className="filter-container">
                <div className="filters">
                    <div className="filters__header">
                        <div onClick={toggleFilterButton} className="filters__title">
                            Filters
                        </div>
                        <FilterButton
                            isBusinessMode={isFilterBusiness}
                            toggleBusinessMode={toggleBusinessMode}
                        />
                    </div>
                    {isFilterBusiness ? (
                        <BusinessFilter
                            address={address}
                            setAddress={setAddress}
                            isFilterButtonClicked={isFilterButtonClicked}
                            gHandleSearchSubmit={handleSearchSubmit}
                            gOnSearchError={gOnSearchError}
                            gOnSearchSuccess={gOnSearchSuccess}
                            activeFilterStates={activeFilterStates}
                            setActiveFilterStates={setActiveFilterStates}
                        />
                    ) : (
                        <EventFilter
                            address={address}
                            setAddress={setAddress}
                            isFilterButtonClicked={isFilterButtonClicked}
                            gHandleSearchSubmit={handleSearchSubmit}
                            gOnSearchError={gOnSearchError}
                            gOnSearchSuccess={gOnSearchSuccess}
                            activeFilterStates={activeFilterStates}
                            setActiveFilterStates={setActiveFilterStates}
                        />

                    )}
                </div>
            </aside>
            <div className="map-container">

                {userLocationAvailable ? <Explore2Map

                    userLat={userLat} userLng={userLng} setUserLat={setUserLat} setUserLng={setUserLng} locations={locations} handleMarkerClick={handleMarkerClick}


                /> : <div>
                    <h3>Loading</h3>

                    <p>
                        Retrieving location data. If this message continues to show, please check you have enabled location access with your browser.
                    </p>

                </div>}

                <div className="e-cc-searchcards">
                    <SearchCards businessDetail={businessDetail} isBusinessMode={isFilterBusiness} />
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
import { useState } from "react";
import { useDocumentTitle, useToggleClass } from '../../utils/functions';
import BusinessFilter from "../../components/ExploreFilters/Business/BusinessFilter";
import EventFilter from "../../components/ExploreFilters/Event/EventFilter";
import FilterButton from "../../components/global/FilterButton/FilterButton";
import SearchCards from "../../components/global/SearchCards/SearchCards";
import ExploreMap from "../../components/ExploreMap/ExploreMap";
import { gHandleSearch, gOnSearchError, gOnSearchSuccess } from "../../utils/google";

import { businessType, eventType } from "../../utils/FormData";

import "./ExplorePage.scss";

const ExplorePage = () => {
    useDocumentTitle("Explore Page");



    const [userLocation, setUserLocation] = useState(null);

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

    const [userLat, setUserLat] = useState(0);
    const [userLng, setUserLng] = useState(0);

    if ('geolocation' in navigator) {
        // Request the user's current position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setUserLat(latitude);
                setUserLng(longitude)
                console.log(`GPS coordinates: Latitude=${latitude}, Longitude=${longitude}`);
            },
            (error) => {
                console.error('Error getting GPS coordinates:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not available in this browser.');
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
                <ExploreMap />
                <div className="e-cc-searchcards">
                    <SearchCards isBusinessMode={isFilterBusiness} />
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;

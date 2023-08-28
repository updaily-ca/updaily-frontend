import { useEffect, useState } from "react";
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
import ExploreMap from "../../components/ExploreMap/ExploreMap";

import "./ExplorePage.scss";

// for the modal


// const [currentImage, setCurrentImage] = useState('');

import DetailModal from "../../components/DetailModal/DetailModal";



// for the modal

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
    const handleMarkerClick = (id: number) => {
        setId(id);
        GetBusinessDetail();
    }

    useEffect(() => {
        if (businessData?.business) {
            setBusinessDetail(businessData.business);
        }
    }, [businessData]);

    // had to use this for marker click because of a weird error


    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleModalClick: any = () => {
        // setCurrentImage();
        setModalOpen((prev) => !prev);
    };


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

                {userLocationAvailable ? <ExploreMap

                    userLat={userLat} userLng={userLng} setUserLat={setUserLat} setUserLng={setUserLng} locations={locations} handleMarkerClick={handleMarkerClick}


                /> : <div className="c-exploremap">
                    <h3>Loading</h3>

                    <p>
                        Retrieving location data. If this message continues to show, please check you have enabled location access with your browser.
                    </p>

                </div>}

                <div className="e-cc-searchcards">
                    <SearchCards businessDetail={businessDetail} isBusinessMode={isFilterBusiness} />
                </div>
            </div>

            <DetailModal modalOpen={modalOpen}
                // currentImage={currentImage} 
                handleModalClick={handleModalClick} />


        </div>
    );
};

export default ExplorePage;
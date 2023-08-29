import { useEffect, useState } from "react"
import { useDocumentTitle, useToggleClass } from "../../utils/functions"
import BusinessFilter from "../../components/ExploreFilters/Business/BusinessFilter"
import EventFilter from "../../components/ExploreFilters/Event/EventFilter"
import FilterButton from "../../components/global/FilterButton/FilterButton"
import SearchCards from "../../components/global/SearchCards/SearchCards"
import { gHandleSearch, gOnSearchError, gOnSearchSuccess } from "../../utils/google"

import { businessType, eventType } from "../../utils/FormData"

import { useQuery, useLazyQuery } from "@apollo/client"
import { getBusinesses, getFeaturedBusiness, getBusinessDetail2 } from "../../graphql/queries"
import { getBusinessDetail } from "../../graphql/queries"
import ExploreMap from "../../components/ExploreMap/ExploreMap"

import "./ExplorePage.scss"

// for the modal

// const [currentImage, setCurrentImage] = useState('');

import DetailModal from "../../components/DetailModal/DetailModal"

// for the modal

const ExplorePage = () => {
    useDocumentTitle("Explore Page")

    const [address, setAddress] = useState<string>("")
    const [isFilterBusiness, setIsFilterBusiness] = useState<boolean>(false)

    const toggleBusinessMode = () => {
        setIsFilterBusiness((prevState) => !prevState)
    }

    const [isFilterButtonClicked, toggleFilterButton] = useToggleClass(false)

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (address) {
            gHandleSearch(address, gOnSearchSuccess, gOnSearchError)
        }
    }

    const initialFilterState = Array.from({ length: businessType.length }, () => false)

    const [activeFilterStates, setActiveFilterStates] = useState<boolean[]>(initialFilterState)

    const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false)

    const [userLat, setUserLat] = useState<number | null>(null)
    const [userLng, setUserLng] = useState<number | null>(null)

    if ("geolocation" in navigator) {
        // Request the user's current position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                setUserLat(latitude)
                setUserLng(longitude)

                setUserLocationAvailable(true)

                // console.log('coordinates set.');
            },
            (error) => {
                console.error("Error getting GPS coordinates:", error.message)
            }
        )
    } else {
        console.error("Geolocation is not available in this browser.")
    }

    const { data } = useQuery(getFeaturedBusiness)
    const { data: businessesData } = useQuery(getBusinesses)

    // console.log(data?.businesses?.slice(0, 200))

    interface Business {
        lat: number
        lng: number
    }

    const businesses = businessesData?.businesses?.slice(0, 100)

    // console.log(businesses);

    interface Location {
        lat: number
        lng: number
    }

    const [businessDetail, setBusinessDetail]: any = useState({})
    const [id, setId] = useState(0)
    const [GetBusinessDetail, { loading, data: businessData }] = useLazyQuery(getBusinessDetail, {
        variables: {
            id: id,
        },
    })
    const handleMarkerClick = (id: number) => {
        setId(id)
        GetBusinessDetail()
    }

    useEffect(() => {
        if (businessData?.business) {
            setBusinessDetail(businessData.business)
        }
    }, [businessData])

    // Modal to show business/event detail
    const [cardId, setCardId] = useState(0);
    const [GetBusinessDetail2, { loading: loading2, data: businessData2 }] = useLazyQuery(getBusinessDetail2, {
        variables: {
            id: cardId,
        },
    })
    const handleCardClick = async (id: number) => {
        console.log(id)
        setCardId(id);
        await GetBusinessDetail2();
        setModalOpen(true);
        console.log(businessData2);
        
    }
    useEffect(() => {
        console.log(businessData2)
    }, [businessData2])
    const [modalInfo, setModalInfo] = useState({});
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const handleModalClick: any = () => {
        // setCurrentImage();
        setModalOpen((prev) => !prev)
    }

    return (
        <div className="explorepage-container">
            <div id="p-explorepage">
            <aside className="filter-container">
                <div className="filters">
                    <div className="filters__header">
                        <div onClick={toggleFilterButton} className="filters__title">
                            Filters
                        </div>
                        <FilterButton isBusinessMode={isFilterBusiness} toggleBusinessMode={toggleBusinessMode} />
                    </div>
                    {isFilterBusiness ? (
                        <BusinessFilter address={address} setAddress={setAddress} isFilterButtonClicked={isFilterButtonClicked} gHandleSearchSubmit={handleSearchSubmit} gOnSearchError={gOnSearchError} gOnSearchSuccess={gOnSearchSuccess} activeFilterStates={activeFilterStates} setActiveFilterStates={setActiveFilterStates} />
                    ) : (
                        <EventFilter address={address} setAddress={setAddress} isFilterButtonClicked={isFilterButtonClicked} gHandleSearchSubmit={handleSearchSubmit} gOnSearchError={gOnSearchError} gOnSearchSuccess={gOnSearchSuccess} activeFilterStates={activeFilterStates} setActiveFilterStates={setActiveFilterStates} />
                    )}
                </div>
            </aside>
            <div className="map-container">
                {userLocationAvailable ? (
                    <ExploreMap userLat={userLat} userLng={userLng} setUserLat={setUserLat} setUserLng={setUserLng} businesses={businesses} handleMarkerClick={handleMarkerClick} />
                ) : (
                    <div className="c-exploremap">
                        <h3>Loading</h3>

                        <p>Retrieving location data. If this message continues to show, please check you have enabled location access with your browser.</p>
                    </div>
                )}

                <div className="e-cc-searchcards">
                    <SearchCards handleCardClick={handleCardClick} businessDetail={businessDetail} isBusinessMode={isFilterBusiness} businesses={businesses} />
                </div>
            </div>
            </div>
            {/* Pop Up Modal */}
            {modalOpen && !loading2 && <DetailModal setModalOpen={setModalOpen} business={businessData2} /> }
        </div>
        
    )
}

export default ExplorePage

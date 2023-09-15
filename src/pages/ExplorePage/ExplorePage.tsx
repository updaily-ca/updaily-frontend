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

import DetailModal from "../../components/DetailModal/DetailModal"

interface LatLng {
    lat: number
    lng: number
}

const ExplorePage = () => {
    useDocumentTitle("Explore Page")

    const [searchTerm, setSearchTerm]: any = useState("")
    const [filterTerm, setFilterTerm]: any = useState("")
    const [dateFilterTerm, setDateFilterTerm]: any = useState("")

    const [vpNorthEast, setVpNorthEast] = useState<LatLng>({ lat: 0, lng: 0 })
    const [vpSouthWest, setVpSouthWest] = useState<LatLng>({ lat: 0, lng: 0 })

    const [address, setAddress] = useState<string>("")
    const [isFilterBusiness, setIsFilterBusiness] = useState<boolean>(false)

    const [isFilterButtonClicked, toggleFilterButton] = useToggleClass(false)

    const initialFilterState = Array.from({ length: businessType.length }, () => false)

    const [activeFilterStates, setActiveFilterStates] = useState<boolean[]>(initialFilterState)

    const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false)

    const [userLat, setUserLat] = useState<number | null>(null)
    const [userLng, setUserLng] = useState<number | null>(null)

    const [newLat, setNewLat] = useState<number | null>(null)
    const [newLng, setNewLng] = useState<number | null>(null)

    const [cardId, setCardId] = useState(0)

    const [modalInfo, setModalInfo] = useState({})
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const [businessDetail, setBusinessDetail]: any = useState({})
    const [id, setId] = useState(0)

    // const { data } = useQuery(getFeaturedBusiness)
    const { data: businessesData } = useQuery(getBusinesses)
    const businesses = businessesData?.businesses?.slice(0, 100)

    const toggleBusinessMode = () => {
        setIsFilterBusiness((prevState) => !prevState)
    }

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (address) {
            gHandleSearch(address, gOnSearchSuccess, gOnSearchError)
        }
    }

    if ("geolocation" in navigator) {
        // Request the user's current position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                setUserLat(latitude)
                setUserLng(longitude)

                setUserLocationAvailable(true)
            },
            (error) => {
                console.error("Error getting GPS coordinates:", error.message)
            }
        )
    } else {
        console.error("Geolocation is not available in this browser.")
    }

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

    const [GetBusinessDetail2, { loading: loading2, data: businessData2 }] = useLazyQuery(getBusinessDetail2, {
        variables: {
            id: cardId,
        },
    })

    const handleCardClick = async (id: number) => {
        setCardId(id)
        await GetBusinessDetail2()
        setModalOpen(true)
    }
    useEffect(() => {
        console.log(businessData2)
    }, [businessData2])



    const handleModalClick: any = () => {
        setModalOpen((prev) => !prev)
    }

    // Filtering
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);
    useEffect(() => {
        const newBusinesses = businesses?.filter((business: { lat: number, lng: number, name: string, type: string }) => {
            const businessLatLng: LatLng = {
                lat: business.lat,
                lng: business.lng,
            };

            const nameMatch = business.name?.toLowerCase().includes(searchTerm.toLowerCase());
            const typeMatch = business.type?.toLowerCase() === filterTerm.toLowerCase();
            const latMatch = (
                businessLatLng.lat >= vpSouthWest.lat &&
                businessLatLng.lat <= vpNorthEast.lat
            );
            const lngMatch = (
                businessLatLng.lng >= vpSouthWest.lng &&
                businessLatLng.lng <= vpNorthEast.lng
            );

            if (searchTerm && filterTerm) {
                return nameMatch && typeMatch && latMatch && lngMatch;
            }

            if (searchTerm) {
                return nameMatch && latMatch && lngMatch;
            }

            if (filterTerm) {
                return typeMatch && latMatch && lngMatch;
            }

            return latMatch && lngMatch;

        });

        setFilteredBusinesses(newBusinesses || []);

    }, [filterTerm, searchTerm, vpNorthEast, vpSouthWest]);

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
                            <BusinessFilter businessType={businessType} searchTerm={searchTerm} setSearchTerm={setSearchTerm} dateFilterTerm={dateFilterTerm} setDateFilterTerm={setDateFilterTerm} filterTerm={filterTerm} setFilterTerm={setFilterTerm} address={address} setAddress={setAddress} isFilterButtonClicked={isFilterButtonClicked} gHandleSearchSubmit={handleSearchSubmit} gOnSearchError={gOnSearchError} gOnSearchSuccess={gOnSearchSuccess} activeFilterStates={activeFilterStates} setActiveFilterStates={setActiveFilterStates} />
                        ) : (
                            <EventFilter address={address} setAddress={setAddress} isFilterButtonClicked={isFilterButtonClicked} gHandleSearchSubmit={handleSearchSubmit} gOnSearchError={gOnSearchError} gOnSearchSuccess={gOnSearchSuccess} activeFilterStates={activeFilterStates} setActiveFilterStates={setActiveFilterStates} />
                        )}
                    </div>
                </aside>
                <div className="map-container">
                    {userLocationAvailable ? (
                        <ExploreMap filteredBusinesses={filteredBusinesses} businessType={businessType} searchTerm={searchTerm} setSearchTerm={setSearchTerm} dateFilterTerm={dateFilterTerm} filterTerm={filterTerm} userLat={userLat} userLng={userLng} newLat={newLat} newLng={newLng} setUserLat={setUserLat} setUserLng={setUserLng} businesses={businesses} handleMarkerClick={handleMarkerClick} vpNorthEast={vpNorthEast} setVpNorthEast={setVpNorthEast} vpSouthWest={vpSouthWest} setVpSouthWest={setVpSouthWest} />

                    ) : (
                        <div className="c-exploremap">
                            <h3>Loading</h3>

                            <p>Retrieving location data. If this message continues to show, please check you have enabled location access with your browser.</p>
                        </div>
                    )}

                    <div className="e-cc-searchcards">
                        <SearchCards searchTerm={searchTerm} handleCardClick={handleCardClick} businessDetail={businessDetail} isBusinessMode={isFilterBusiness} businesses={businesses} vpNorthEast={vpNorthEast} vpSouthWest={vpSouthWest} setNewLat={setNewLat} filteredBusinesses={filteredBusinesses} setNewLng={setNewLng} />
                    </div>
                </div>
            </div>
            {/* Pop Up Modal */}
            {modalOpen && !loading2 && <DetailModal handleModalClick={handleModalClick} modalOpen={modalOpen} setModalOpen={setModalOpen} business={businessData2} />}
        </div>
    )
}

export default ExplorePage

import { performSearch, useDocumentTitle } from "../../utils/functions"
import { useState } from "react"
import { getFeaturedBusiness } from "../../graphql/queries"
import { useQuery } from "@apollo/client"

import SearchCards from "../../components/global/SearchCards/SearchCards"
import FilterButton from "../../components/global/FilterButton/FilterButton"

import "./HomePage.scss"

import searchIcon from "../../asset/home/search-icon.png"

interface LatLng {
    lat: number;
    lng: number;
}

const HomePage = () => {
    useDocumentTitle("Home Page")

    const [vpNorthEast, setVpNorthEast] = useState<LatLng>({ lat: 0, lng: 0 });
    const [vpSouthWest, setVpSouthWest] = useState<LatLng>({ lat: 0, lng: 0 });

    const [isFilterBusiness, setIsFilterBusiness] = useState<boolean>(false)
    const toggleBusinessMode = (): void => {
        setIsFilterBusiness((prevState) => !prevState)
    }

    const { data } = useQuery(getFeaturedBusiness);

    const businesses = data?.businesses?.slice(0, 4);

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [prevSearchTerm, setPrevSearchTerm] = useState<string>("")

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            performSearch(searchTerm, prevSearchTerm, setPrevSearchTerm)
        }
    }

    const handleSearchClick = () => {
        performSearch(searchTerm, prevSearchTerm, setPrevSearchTerm)
    }

    const handleCardClick = (id: any) => {
        console.log(id);
    } 

    return (
        <div id="p-home-page">
            {/* page - home page */}
            <section className="home-hero">
                <h1 className="home-hero__title">We make exploring Vancouver quick and easy!</h1>
                <p className="home-hero__description">Search for restaurants, events or businesses in Vancouver.</p>

                <div className="home-search">
                    <input type="text" className="home-search__input" placeholder="" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
                    <div className="home-search__btn" onClick={handleSearchClick}>
                        <img className="home-search__btn--icon" src={searchIcon} alt="" />
                        <span className="home-search__btn--search">Search</span>
                    </div>
                </div>
            </section>
            <section className="h-cc-searchcards">
                {/* home page - component container - search cards */}
                <h1 className="h-cc-searchcards__title">New events to explore this week</h1>
                <SearchCards
<<<<<<< HEAD

                    searchTerm={searchTerm}

                    vpNorthEast={vpNorthEast} vpSouthWest={vpSouthWest}

=======
                    handleCardClick={handleCardClick}
                    vpNorthEast={vpNorthEast} 
                    vpSouthWest={vpSouthWest}
>>>>>>> develop
                    isBusinessMode={isFilterBusiness} businesses={businesses} />
            </section>
            <FilterButton isBusinessMode={isFilterBusiness} toggleBusinessMode={toggleBusinessMode} />
        </div>
    )
}

export default HomePage

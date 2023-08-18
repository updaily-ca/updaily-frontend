import { useDocumentTitle } from "../../utils/functions"
import { performSearch, useToggleClass } from "../../utils/functions"
import { useState } from "react"

import BusinessFilter from "../../components/ExploreFilters/Business/BusinessFilter"
import EventFilter from "../../components/ExploreFilters/Event/EventFilter"
import FilterButton from "../../components/global/FilterButton/FilterButton"
import SearchCards from "../../components/global/SearchCards/SearchCards"
import ExploreMap from "../../components/ExploreMap/ExploreMap"

import "./ExplorePage.scss"

const ExplorePage = () => {
    useDocumentTitle("Explore Page")

    const [isFilterBusiness, setIsFilterBusiness] = useState<boolean>(false)

    const toggleBusinessMode = (): void => {
        setIsFilterBusiness((prevState) => !prevState)
    }

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [prevSearchTerm, setPrevSearchTerm] = useState<string>("")

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            performSearch(searchTerm, prevSearchTerm, setPrevSearchTerm)
        }
    }

    const handleSearchClick = (): void => {
        performSearch(searchTerm, prevSearchTerm, setPrevSearchTerm)
    }

    const [isFilterButtonClicked, toggleFilterButton] = useToggleClass(false)

    return (
        <div id="p-explorepage">
            {/* page - explore page */}
            <aside className="filter-container">
                <div className="filters">
                    <div className="filters__header">
                        <div onClick={toggleFilterButton} className="filters__title">
                            {" "}
                            Filters
                        </div>
                        <FilterButton isBusinessMode={isFilterBusiness} toggleBusinessMode={toggleBusinessMode} />
                    </div>

                    {isFilterBusiness ? <BusinessFilter isFilterButtonClicked={isFilterButtonClicked} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleKeyDown={handleKeyDown} handleSearchClick={handleSearchClick} /> : <EventFilter />}
                </div>
            </aside>
            <div className="map-container">
                <ExploreMap />

                <div className="e-cc-searchcards">
                    {/* explore page - component container - search cards */}
                    <SearchCards isBusinessMode={isFilterBusiness} />
                </div>
            </div>
        </div>
    )
}

export default ExplorePage

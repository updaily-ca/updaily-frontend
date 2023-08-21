import { eventType } from "../../../utils/FormData"

import "../ExploreFilters.scss";
import "./EventFilter.scss";

interface EventFilterProps {
    isFilterButtonClicked: boolean
    searchTerm: string
    setSearchTerm: (newValues: string) => void
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
    handleSearchClick: () => void
}
const EventFilter = ({ isFilterButtonClicked, searchTerm, setSearchTerm, handleKeyDown, handleSearchClick }: EventFilterProps) => {
    return (
        <div className={`c-eventfilter ${isFilterButtonClicked ? 'active' : ''}`}>

            <div className="filter-card">
                <label className="filter-card__subtitle">Search by location</label>
                <input type="text" className="filter-card__input filter-card__input--search" placeholder="" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
            </div>

            <div className="filter-card">
                <label className="filter-card__subtitle">Price Range</label>
                <input type="text" className="filter-card__input filter-card__input--price-min" />
                <input type="text" className="filter-card__input filter-card__input--price-max" />
            </div>

            <div className="filter-card">
                <div className="filter-card__subtitle">Opening Times</div>

                <div className="filter-card__btn">Morning</div>
                <div className="filter-card__btn">Afternoon</div>
                <div className="filter-card__btn">Evening</div>
                <div className="filter-card__btn">Open Now</div>
            </div>

            <div className="filter-card">
                <div className="filter-card__subtitle">Search</div>

                {eventType
                    .sort((a, b) => a.localeCompare(b))
                    .map((eventType) => (
                        <div key={eventType} className="uc filter-card__btn">
                            {eventType}
                        </div>
                    ))}

            </div>

            <div className="filter-card">
                <div className="filter-card__subtitle">Event Age</div>

                <div className="filter-card__btn">Newest</div>
                <div className="filter-card__btn">This Year</div>
                <div className="filter-card__btn">Any</div>
            </div>

            <div className="c-eventfilter__search-btn" onClick={handleSearchClick}>
                Search
            </div>

            {/* </div> */}
        </div>
    )
}

export default EventFilter

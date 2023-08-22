import { eventType } from "../../../utils/FormData"
import { toggleFilter } from "../../../utils/functions"
import "./EventFilter.scss"

interface EventFilterProps {
    isFilterButtonClicked: boolean
    address: string
    setAddress: (newAddress: string) => void
    gHandleSearchSubmit: (e: React.FormEvent) => void
    gOnSearchError: any // Update this type
    gOnSearchSuccess: any // Update this type

    activeFilterStates: any;
    setActiveFilterStates: any;
}

const EventFilter: React.FC<EventFilterProps> = ({
    isFilterButtonClicked,
    address,
    setAddress,
    gHandleSearchSubmit,

    activeFilterStates,
    setActiveFilterStates,
}) => {
    return (
        <div className={`c-eventfilter ${isFilterButtonClicked ? "active" : ""}`}>
            <div className="filter-card">
                <label className="filter-card__subtitle">Search by location</label>
                <input
                    type="text"
                    className="filter-card__input filter-card__input--search"
                    placeholder=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onSubmit={gHandleSearchSubmit}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            gHandleSearchSubmit(e)
                        }
                    }}
                />
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
                    .map((eventType, index) => (
                        <div
                            onClick={() => toggleFilter(index, activeFilterStates, setActiveFilterStates)} // Pass all three arguments
                            key={eventType}
                            className={`uc filter-card__btn ${activeFilterStates[index] ? "active" : ""}`}
                        >
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
            <div
                className="c-eventfilter__search-btn"
                onClick={gHandleSearchSubmit}>
                Search
            </div>
        </div>
    )
}

export default EventFilter

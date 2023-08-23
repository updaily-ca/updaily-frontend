import { businessType } from "../../../utils/FormData";
import { toggleFilter } from "../../../utils/functions";
import "./BusinessFilter.scss";

interface BusinessFilterProps {
    isFilterButtonClicked: boolean;
    address: string;
    setAddress: (newAddress: string) => void;
    gHandleSearchSubmit: (e: React.FormEvent) => void;
    gOnSearchError: any; // Update this 
    gOnSearchSuccess: any; // Update this
    activeFilterStates: any;
    setActiveFilterStates: any;
}

const BusinessFilter: React.FC<BusinessFilterProps> = ({
    isFilterButtonClicked,
    address,
    setAddress,
    gHandleSearchSubmit,

    activeFilterStates,
    setActiveFilterStates,
}) => {

    return (
        <div className={`c-businessfilter ${isFilterButtonClicked ? "active" : ""}`}>
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
                            gHandleSearchSubmit(e);
                        }
                    }} />
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
                {businessType
                    .sort((a, b) => a.localeCompare(b))
                    .map((businessType, index) => (
                        <div
                            onClick={() => toggleFilter(businessType, activeFilterStates, setActiveFilterStates)}
                            key={businessType}
                            className={`uc filter-card__btn ${activeFilterStates[businessType] ? "active" : ""}`}
                        >
                            {businessType}
                        </div>
                    ))}
            </div>
            <div className="filter-card">
                <div className="filter-card__subtitle">Business Age</div>
                <div className="filter-card__btn">Newest</div>
                <div className="filter-card__btn">This Year</div>
                <div className="filter-card__btn">Any</div>
            </div>
            <div className="c-businessfilter__search-btn" onClick={gHandleSearchSubmit}>
                Search
            </div>
        </div >
    );
};

export default BusinessFilter;

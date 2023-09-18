import { businessType } from "../../../utils/FormData";
import { toggleFilter } from "../../../utils/functions";
import "./BusinessFilter.scss";

interface BusinessFilterProps {
    searchTerm: string;
    setSearchTerm: any;
    dateFilterTerm: any;
    setDateFilterTerm: any;
    filterTerm: string;
    setFilterTerm: any;
    isFilterButtonClicked: boolean;
    address: string;
    setAddress: (newAddress: string) => void;
    gHandleSearchSubmit: (e: React.FormEvent) => void;
    gOnSearchError: any; // Update this 
    gOnSearchSuccess: any; // Update this
    activeFilterStates: any;
    setActiveFilterStates: any;
    businessType: string[];
}

const BusinessFilter: React.FC<BusinessFilterProps> = ({
    businessType,
    searchTerm,
    setSearchTerm,
    filterTerm,
    dateFilterTerm,
    setDateFilterTerm,
    setFilterTerm,
    isFilterButtonClicked,
    address,
    setAddress,
    gHandleSearchSubmit,

    activeFilterStates,
    setActiveFilterStates,
}) => {



    const handleFilterClick = (type: any) => {
        toggleFilter(type, activeFilterStates, setActiveFilterStates);
        setFilterTerm(activeFilterStates[type] ? '' : type);
    };

    const handleDateFilterClick = (type: any) => {
        if (type === "Newest" || type === "This Year" || type === "Any" || type === 'Oldest') {
            // Handle date filter selection here
            // You can use setFilterTerm to set the date filter value
            setDateFilterTerm(type);
        }
    }

    return (
        <div className={`c-businessfilter ${isFilterButtonClicked ? "active" : ""}`}>
            <div className="filter-card">
                <label className="filter-card__subtitle">Search name</label>

                <input
                    type="text"
                    className="filter-card__input filter-card__input--search"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onSubmit={gHandleSearchSubmit}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            gHandleSearchSubmit(e);
                        }
                    }} />
            </div>
            {/* <div className="filter-card">
                <label className="filter-card__subtitle">Price Range</label>
                <input type="text" className="filter-card__input filter-card__input--price-min" />
                <input type="text" className="filter-card__input filter-card__input--price-max" />
            </div> */}
            {/* <div className="filter-card">
                <div className="filter-card__subtitle">Opening Times</div>
                <div className="filter-card__btn">Morning</div>
                <div className="filter-card__btn">Afternoon</div>
                <div className="filter-card__btn">Evening</div>
                <div className="filter-card__btn">Open Now</div>
            </div> */}
            <div className="filter-card">
                <div className="filter-card__subtitle">Filter</div>
                {businessType
                    .sort((a, b) => a.localeCompare(b))
                    .map((businessType, index) => (
                        <div
                            onClick={() => handleFilterClick(businessType)}
                            key={businessType}
                            className={`uc filter-card__btn ${activeFilterStates[businessType] ? "active" : ""}`}
                        >
                            {businessType}
                        </div>
                    ))}
            </div>

            <div className="filter-card filter-card--date">
                <div className="filter-card__subtitle">Business Age</div>
                <div
                    className={`filter-card__btn ${dateFilterTerm === "Newest" ? "active" : ""}`}
                    onClick={() => handleDateFilterClick("Newest")}>
                    Newest
                </div>
                <div
                    className={`filter-card__btn ${dateFilterTerm === "This Year" ? "active" : ""}`}
                    onClick={() => handleDateFilterClick("This Year")}>
                    This Year
                </div>

                <div
                    className={`filter-card__btn ${dateFilterTerm === "Oldest" ? "active" : ""}`}
                    onClick={() => handleDateFilterClick("Oldest")}>
                    Oldest
                </div>

                <div
                    className={`filter-card__btn ${dateFilterTerm === "Any" ? "active" : ""}`}
                    onClick={() => handleDateFilterClick("Any")}>
                    Any
                </div>
            </div>
        </div>
    );
};

export default BusinessFilter;

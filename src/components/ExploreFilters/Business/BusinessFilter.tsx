import './BusinessFilter.scss';

interface BusinessFilterProps {
    searchTerm: string,
    setSearchTerm: (newValues: string) => void,
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    handleSearchClick: () => void
}
const BusinessFilter = ({ searchTerm, setSearchTerm, handleKeyDown, handleSearchClick, }: BusinessFilterProps) => {

    return (
        <div className="c-businessfilter">
            {/* This should only show if the business filter has been toggled. */}

            {/* <div className="c-businessfilter__search"> */}

            <div className="filter-card">

                <label className='filter-card__subtitle'>Search by location</label>
                <input
                    type="text"
                    className="filter-card__input filter-card__input--search"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
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

                <div className="filter-card__btn">Food and drink</div>
                <div className="filter-card__btn">Nature</div>
                <div className="filter-card__btn">Art and culture</div>
                <div className="filter-card__btn">Technology</div>

                <div className="filter-card__btn">Sports</div>
                <div className="filter-card__btn">Hiking & Camping</div>
                <div className="filter-card__btn">Entertainment</div>
                <div className="filter-card__btn">Other</div>

            </div>

            <div className="filter-card">

                <div className="filter-card__subtitle">Business Age</div>

                <div className="filter-card__btn">Newest</div>
                <div className="filter-card__btn">This Year</div>
                <div className="filter-card__btn">Any</div>

            </div>


            <div className="c-businessfilter__search-btn" onClick={handleSearchClick}>Search
            </div>


            {/* </div> */}
        </div>
    );
};

export default BusinessFilter;

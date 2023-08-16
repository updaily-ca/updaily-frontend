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

            <label className='c-businessfilter__search-title'>Search by location</label>
            <input
                type="text"
                className="c-businessfilter__search-input"
                placeholder=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <div className="group-filter">

                <label className="group-filter__label">Price Range</label>
                <input type="text" className="group-filter__input group-filter__input--price-min" />
                <input type="text" className="group-filter__input group-filter__input--price-max" />

            </div>

            <div className="group-filter">

                <div className="group-filter__label">Opening Times</div>

                <div className="group-filter__btn">Morning</div>
                <div className="group-filter__btn">Afternoon</div>
                <div className="group-filter__btn">Evening</div>
                <div className="group-filter__btn">Open Now</div>

            </div>

            <div className="group-filter">

                <div className="group-filter__label">Search</div>

                <div className="group-filter__btn">Food and drink</div>
                <div className="group-filter__btn">Nature</div>
                <div className="group-filter__btn">Art and culture</div>
                <div className="group-filter__btn">Technology</div>

                <div className="group-filter__btn">Sports</div>
                <div className="group-filter__btn">Hiking & Camping</div>
                <div className="group-filter__btn">Entertainment</div>
                <div className="group-filter__btn">Other</div>

            </div>

            <div className="group-filter">

                <div className="group-filter__label">Business Age</div>

                <div className="group-filter__btn">Newest</div>
                <div className="group-filter__btn">This Year</div>
                <div className="group-filter__btn">Any</div>

            </div>


            <div className="c-businessfilter__search-btn" onClick={handleSearchClick}>Search
            </div>


            {/* </div> */}
        </div>
    );
};

export default BusinessFilter;

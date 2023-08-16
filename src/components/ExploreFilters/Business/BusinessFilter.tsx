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
            This should only show if the business filter has been toggled.

            <div className="home-search">
                <input
                    type="text"
                    className="home-search__input"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="home-search__btn" onClick={handleSearchClick}>
                    <span className="home-search__btn--search">Search</span>
                </div>
            </div>
        </div>
    );
};

export default BusinessFilter;

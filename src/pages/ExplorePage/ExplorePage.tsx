import BusinessFilter from '../../components/ExploreFilters/Business/BusinessFilter';
import EventFilter from '../../components/ExploreFilters/Event/EventFilter';
import FilterButton from '../../components/global/FilterButton/FilterButton';
import SearchCards from '../../components/global/SearchCards/SearchCards';
import { performSearch } from '../../utils/functions';
import { useEffect, useState } from 'react';

import './ExplorePage.scss';
import { useDocumentTitle } from '../../utils/functions';

const ExplorePage = () => {
    useDocumentTitle('Explore Page');

    const [isFilterBusiness, setIsFilterBusiness] = useState<boolean>(false);

    const toggleBusinessMode = (): void => {
        setIsFilterBusiness(!isFilterBusiness);
    };

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [prevSearchTerm, setPrevSearchTerm] = useState<string>('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            performSearch(searchTerm, prevSearchTerm, setPrevSearchTerm);
        }
    };

    const handleSearchClick = (): void => {
        performSearch(searchTerm, prevSearchTerm, setPrevSearchTerm);
    };

    // useEffect(() => {
    //     console.log(searchTerm, isFilterBusiness);
    // }, [searchTerm, isFilterBusiness]);

    return (
        <div id="p-explorepage"> {/* page - explore page */}

            <aside className="filter-container">
                <div className="filters">

                    <div className="filters__header">

                        <div className="filters__title"> Filters
                        </div>
                        <FilterButton isBusinessMode={isFilterBusiness} toggleBusinessMode={toggleBusinessMode} />
                    </div>

                    {/*  This needs optimising because there's a function we can use in the utils function file */}

                    {isFilterBusiness ? <BusinessFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleKeyDown={handleKeyDown} handleSearchClick={handleSearchClick} /> : <EventFilter />}

                </div>

            </aside>

            <div className="map-container">

                <div className="map">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente explicabo optio illo cupiditate laborum? Deserunt et eaque blanditiis culpa nulla?
                </div>

                <div className="e-cc-searchcards"> {/* explore page - component container - search cards */}
                    <SearchCards />
                </div>

            </div>

        </div>
    )
}

export default ExplorePage;
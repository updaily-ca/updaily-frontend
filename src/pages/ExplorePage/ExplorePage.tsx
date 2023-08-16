import BusinessFilter from '../../components/ExploreFilters/Business/BusinessFilter';
import EventFilter from '../../components/ExploreFilters/Event/EventFilter';
import FilterButton from '../../components/global/FilterButton/FilterButton';
import SearchCards from '../../components/global/SearchCards/SearchCards';
import { useState } from 'react';

import './ExplorePage.scss';

const ExplorePage = () => {

    const [isFilterBusiness, setIsFilterBusiness] = useState<boolean>(false);

    const toggleBusinessMode = (): void => {
        setIsFilterBusiness(!isFilterBusiness);
    };

    return (
        <div id="p-explorepage"> {/* page - explore page */}

            <aside className="filter-container">
                <div className="filters">

                    <FilterButton isBusinessMode={isFilterBusiness} toggleBusinessMode={toggleBusinessMode} />

                    {/*  This needs optimising because there's a function we can use in the utils function file */}

                    {isFilterBusiness ? <BusinessFilter /> : <EventFilter />}

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
import BusinessFilter from '../../components/ExploreFilters/Business/BusinessFilter';
import EventFilter from '../../components/ExploreFilters/Event/EventFilter';
import SearchCards from '../../components/global/SearchCards/SearchCards';
import './ExplorePage.scss';

const ExplorePage = () => {
    return (
        <div id="p-explorepage"> {/* page - explore page */}

            <aside className="filter-container">
                <div className="filters">

                    <EventFilter />
                    <BusinessFilter />


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
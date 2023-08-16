import SearchCards from '../../components/global/SearchCards/SearchCards';
import './ExplorePage.scss';

const ExplorePage = () => {
    return (
        <div id="p-explorepage"> {/* page - explore page */}

            <aside className="filter-container">
                <div className="filters">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veritatis, consectetur possimus nulla recusandae qui? Doloribus nam repellendus corporis debitis?
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
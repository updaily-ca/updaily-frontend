import './SearchCards.scss';

// import '../../../asset/home/search-icon.png';
import arrow from '../../../asset/global/right-arrow.png';
import photo from '../../../asset/samplephotos/fireworks.jpg';

import EventSearchCards from './Event/EventSearchCards';
import BusinessSearchCards from './Business/BusinessSearchCards';

interface LatLng {
    lat: number;
    lng: number;
}

interface SearchCardsProps {
    searchTerm: string;
    isBusinessMode: boolean,
    businessDetail?: { name: string, location: string, photos: string[], description: string },
    businesses: any,
    vpNorthEast: LatLng;
    vpSouthWest: LatLng;
    handleCardClick: (id: any) => void,
    setNewLat: (lat: number) => void;
    setNewLng: (lng: number) => void;
    filteredBusinesses: any;
}

interface LatLng {
    lat: number;
    lng: number;
}

const SearchCards: React.FC<SearchCardsProps> = ({ searchTerm, isBusinessMode, businessDetail, handleCardClick, businesses, filteredBusinesses, vpNorthEast, vpSouthWest, setNewLat, setNewLng }) => {

    return (

        <div className="c-search"> {/* component - search */}
            {isBusinessMode ? <BusinessSearchCards
                searchTerm={searchTerm}
                handleCardClick={handleCardClick}
                // filteredBusinesses={filteredBusinesses}
                businessDetail={businessDetail}
                images={{ arrow, photo }}
                businesses={businesses}
                filteredBusinesses={filteredBusinesses}
                setNewLat={setNewLat} setNewLng={setNewLng}
                vpNorthEast={vpNorthEast}
                vpSouthWest={vpSouthWest}

            /> : <EventSearchCards images={{ arrow, photo }} />
            }

        </div>

    )
}

export default SearchCards
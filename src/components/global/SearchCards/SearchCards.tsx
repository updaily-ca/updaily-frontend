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
}

interface LatLng {
    lat: number;
    lng: number;
}

<<<<<<< HEAD
const SearchCards: React.FC<SearchCardsProps> = ({ searchTerm, isBusinessMode, businessDetail, businesses, vpNorthEast, vpSouthWest }) => {
=======


const SearchCards: React.FC<SearchCardsProps> = ({ isBusinessMode, businessDetail, businesses, handleCardClick, vpNorthEast, vpSouthWest}) => {
>>>>>>> develop

    return (

        <div className="c-search"> {/* component - search */}
<<<<<<< HEAD
            {isBusinessMode ? <BusinessSearchCards
                searchTerm={searchTerm} businessDetail={businessDetail} images={{ arrow, photo }} businesses={businesses} vpNorthEast={vpNorthEast} vpSouthWest={vpSouthWest}
=======
            {isBusinessMode ? <BusinessSearchCards 
                                handleCardClick={handleCardClick} 
                                businessDetail={businessDetail} 
                                images={{ arrow, photo }} 
                                businesses={businesses}
                                vpNorthEast={vpNorthEast} 
                                vpSouthWest={vpSouthWest}
>>>>>>> develop

            /> : <EventSearchCards images={{ arrow, photo }} />
            }

        </div>

    )
}

export default SearchCards
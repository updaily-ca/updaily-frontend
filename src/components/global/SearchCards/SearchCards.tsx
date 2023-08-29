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



const SearchCards: React.FC<SearchCardsProps> = ({ isBusinessMode, businessDetail, businesses, handleCardClick, vpNorthEast, vpSouthWest}) => {

    return (

        <div className="c-search"> {/* component - search */}
            {isBusinessMode ? <BusinessSearchCards 
                                handleCardClick={handleCardClick} 
                                businessDetail={businessDetail} 
                                images={{ arrow, photo }} 
                                businesses={businesses}
                                vpNorthEast={vpNorthEast} 
                                vpSouthWest={vpSouthWest}

            /> : <EventSearchCards images={{ arrow, photo }} />
            }

        </div>

    )
}

export default SearchCards
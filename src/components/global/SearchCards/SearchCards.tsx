import { useRef } from 'react';

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
    isHomePage: boolean,
    isBusinessMode: boolean,
    businessDetail?: { name: string, location: string, photos: string[], description: string },
    setBusinessDetail: { name: string, location: string, photos: string[], description: string },
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

const SearchCards: React.FC<SearchCardsProps> = ({ searchTerm, isBusinessMode, isHomePage, businessDetail, setBusinessDetail, handleCardClick, businesses, filteredBusinesses, vpNorthEast, vpSouthWest, setNewLat, setNewLng }) => {

    const cSearchRef = useRef<HTMLDivElement | null>(null);

    return (

        <div className="c-search" ref={cSearchRef}> {/* component - search */}
            {isBusinessMode ? <BusinessSearchCards
                searchTerm={searchTerm}
                handleCardClick={handleCardClick}
                isHomePage={isHomePage}
                isBusinessMode={isBusinessMode}
                businessDetail={businessDetail}
                setBusinessDetail={setBusinessDetail}
                images={{ arrow, photo }}
                businesses={businesses}
                cSearchRef={cSearchRef}
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
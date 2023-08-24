import './SearchCards.scss';

// import '../../../asset/home/search-icon.png';
import arrow from '../../../asset/global/right-arrow.png';
import photo from '../../../asset/samplephotos/fireworks.jpg';

import EventSearchCards from './Event/EventSearchCards';
import BusinessSearchCards from './Business/BusinessSearchCards';

interface SearchCardsProps {
    isBusinessMode: boolean,
    businessDetail?: {name: string, location: string, photos: string[], description: string}
}

const SearchCards: React.FC<SearchCardsProps> = ({ isBusinessMode, businessDetail}) => {

    return (

        <div className="c-search"> {/* component - search */}
            {isBusinessMode ? <BusinessSearchCards businessDetail={businessDetail} images={{ arrow, photo }} /> : <EventSearchCards images={{ arrow, photo }} />
            }

        </div>

    )
}

export default SearchCards
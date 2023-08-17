import './SearchCards.scss';

// import '../../../asset/home/search-icon.png';
import arrow from '../../../asset/global/right-arrow.png';
import photo from '../../../asset/samplephotos/fireworks.jpg';
import photoB from '../../../asset/samplephotos/fireworks.jpg';

import EventSearchCards from './Event/EventSearchCards';
import BusinessSearchCards from './Business/BusinessSearchCards';


interface SearchCardsProps {
    isBusinessMode: any;
}

const SearchCards: React.FC<SearchCardsProps> = ({ isBusinessMode }) => {

    return (

        <div className="c-search"> {/* component - search */}

            {isBusinessMode ? <EventSearchCards images={{ arrow, photo }} /> : <BusinessSearchCards images={{ arrow, photo }} />
            }

        </div>

    )
}

export default SearchCards
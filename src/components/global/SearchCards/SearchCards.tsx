import './SearchCards.scss';

// import '../../../asset/home/search-icon.png';
import arrow from '../../../asset/global/right-arrow.png';
import photo from '../../../asset/samplephotos/fireworks.jpg';

const SearchCards = () => {
    return (

        <div className="c-search"> {/* component - search */}

            <article className="search-card">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={arrow} alt="right-arrow" className='search-card__arrow' />

            </article>

            <article className="search-card">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={arrow} alt="right-arrow" className='search-card__arrow' />

            </article>

            <article className="search-card">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={arrow} alt="right-arrow" className='search-card__arrow' />

            </article>

        </div>




    )
}

export default SearchCards
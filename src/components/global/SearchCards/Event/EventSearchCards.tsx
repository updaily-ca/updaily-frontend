interface EventSearchCardProps {
    images: {
        arrow: string;
        photo: string;
    };
}

const EventSearchCards: React.FC<EventSearchCardProps> = ({ images }) => {

    console.log('event', images.arrow, images.photo)

    return (

        <>
            <article className="search-card search-card--event">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={images.photo} alt={images.photo} className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={images.arrow} alt={images.arrow} className='search-card__arrow' />

            </article>

            <article className="search-card">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={images.photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={images.arrow} alt={images.arrow} className='search-card__arrow' />

            </article>

            <article className="search-card">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={images.photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={images.arrow} alt={images.arrow} className='search-card__arrow' />

            </article>

        </>

    )
}

export default EventSearchCards;
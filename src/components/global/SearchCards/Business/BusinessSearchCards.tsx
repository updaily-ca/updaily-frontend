interface BusinessSearchCardProps {
    images: {
        arrow: string;
        photo: string;
    };
}

const BusinessSearchCards: React.FC<BusinessSearchCardProps> = ({ images }) => {

    console.log('business', images.arrow, images.photo)

    return (
        <>

            <article className="search-card search-card--business">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={images.photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={images.arrow} alt="right-arrow" className='search-card__arrow' />

            </article>

            <article className="search-card">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={images.photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={images.arrow} alt="right-arrow" className='search-card__arrow' />

            </article>

            <article className="search-card">
                <h2 className="search-card__title">Shipyards Night Market</h2>
                <div className="search-card__photo"><img src={images.photo} alt="card-photo" className='search-card__photo--image' /> </div>
                <p className="search-card__location">North Vancouver</p>
                <p className="search-card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, rem.</p>

                <img src={images.arrow} alt="right-arrow" className='search-card__arrow' />

            </article>

        </>
    )
}

export default BusinessSearchCards;
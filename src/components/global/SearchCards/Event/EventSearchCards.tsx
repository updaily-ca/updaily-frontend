interface EventSearchCardProps {
    images: {
        arrow: string
        photo: string
    }
}

const EventSearchCards: React.FC<EventSearchCardProps> = ({ images }) => {

    const altPhoto = "";

    return (
        <>

            <div className="search-card search-card--event">

                <div className="search-card__photo">
                    <img src={images.photo} alt={altPhoto} className="search-card__photo--image" />
                </div>

                <section className="search-card__side">

                    <h2 className="search-card__title">Shipyards Night Market</h2>

                    <p className="search-card__location">North Vancouver</p>
                    <p className="search-card__description">Events are currently hardcoded. Please click the event button and toggle to business.</p>

                </section>
            </div>

            <div className="search-card search-card--event">

                <div className="search-card__photo">
                    <img src={images.photo} alt={altPhoto} className="search-card__photo--image" />
                </div>

                <section className="search-card__side">

                    <h2 className="search-card__title">Shipyards Night Market</h2>

                    <p className="search-card__location">North Vancouver</p>
                    <p className="search-card__description">Events are currently hardcoded. Please click the event button and toggle to business.</p>

                </section>
            </div>

            <div className="search-card search-card--event">

                <div className="search-card__photo">
                    <img src={images.photo} alt={altPhoto} className="search-card__photo--image" />
                </div>

                <section className="search-card__side">

                    <h2 className="search-card__title">Shipyards Night Market</h2>

                    <p className="search-card__location">North Vancouver</p>
                    <p className="search-card__description">Events are currently hardcoded. Please click the event button and toggle to business.</p>

                </section>
            </div>

        </>
    )
}

export default EventSearchCards

interface BusinessSearchCardProps {
    images: {
        arrow: string
        photo: string
    }
    businessDetail: any
    // businessDetail: {
    //     name?: string;
    //     location?: string;
    //     description?: string;
    //     photos?: string[];
    // };
    locations: any[]
}

const BusinessSearchCards: React.FC<BusinessSearchCardProps> = ({ images, businessDetail, locations }) => {
    const altPhoto = ""

    console.log(locations)

    return (
        <>
            {businessDetail?.name ? (
                <article className="search-card">
                    <h2 className="search-card__title">{businessDetail?.name}</h2>
                    <div className="search-card__photo">
                        <img src={businessDetail.photos[0]} alt={altPhoto} className="search-card__photo--image" />{" "}
                    </div>
                    <p className="search-card__location">{businessDetail?.location}</p>
                    <p className="search-card__description">{businessDetail?.description}</p>

                    <img src={images.arrow} alt="right-arrow" className="search-card__arrow" />
                </article>
            ) : null}

            {locations.map((location) => (
                <article key={location.id} className="search-card">
                    <h2 className="search-card__title">{location?.name}</h2>
                    <div className="search-card__photo">
                        <img src={location.photos[0]} alt={altPhoto} className="search-card__photo--image" />{" "}
                    </div>
                    <p className="search-card__location">{location?.location}</p>
                    <p className="search-card__description">{location?.description}</p>
                </article>
            ))}
        </>
    )
}

export default BusinessSearchCards

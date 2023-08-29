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
    businesses: any[]
}

const BusinessSearchCards: React.FC<BusinessSearchCardProps> = ({ images, businessDetail, businesses }) => {
    const altPhoto = ""

    console.log(businesses)

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

            {businesses.map((business) => (
                <article key={business.id} className="search-card">
                    <h2 className="search-card__title">{business?.name}</h2>
                    <div className="search-card__photo">
                        <img src={business.photos[0]} alt={altPhoto} className="search-card__photo--image" />{" "}
                    </div>
                    <p className="search-card__location">{business?.location}</p>
                    <p className="search-card__description">{business?.description}</p>
                </article>
            ))}
        </>
    )
}

export default BusinessSearchCards

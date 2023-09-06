interface BusinessSearchCardProps {
    searchTerm: string;
    images: {
        arrow: string
        photo: string
    },
    businessDetail: any,
    businesses: any[],
    vpNorthEast: LatLng,
    vpSouthWest: LatLng,
    handleCardClick: (id: any) => void
    setNewLat: (lat: number) => void;
    setNewLng: (lng: number) => void;
}

interface LatLng {
    lat: number;
    lng: number;
}

const BusinessSearchCards: React.FC<BusinessSearchCardProps> = ({ searchTerm, images, businessDetail, businesses, vpNorthEast, vpSouthWest, setNewLat, setNewLng, handleCardClick }) => {

    const altPhoto = ""

    const filteredBusinesses = businesses.filter(business => {
        const businessLatLng: LatLng = {
            lat: business.lat,
            lng: business.lng,

        };

        return (
            business.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            businessLatLng.lat >= vpSouthWest.lat &&
            businessLatLng.lat <= vpNorthEast.lat &&
            businessLatLng.lng >= vpSouthWest.lng &&
            businessLatLng.lng <= vpNorthEast.lng
        );
    });

    return (
        <>

            {businessDetail?.name ? (
                <article
                    onClick={() => {
                        setNewLat(businessDetail?.lat);
                        setNewLng(businessDetail?.lng);
                    }}
                    className="search-card">
                    <h2 className="search-card__title">{businessDetail?.name}</h2>
                    <div className="search-card__photo">
                        <img src={businessDetail.photos[0]} alt={altPhoto} className="search-card__photo--image" />{" "}
                    </div>
                    <p className="search-card__location">{businessDetail?.location}</p>
                    <p className="search-card__description">{businessDetail?.description}</p>

                </article>
            ) : null}

            {filteredBusinesses.map((business) => (
                <article onClick={() => {
                    setNewLat(business?.lat);
                    setNewLng(business?.lng);
                }}

                    key={business.id} className="search-card">
                    <h2 className="search-card__title">{business?.name}</h2>
                    <div className="search-card__photo">
                        <img src={business.photos[0]} alt={altPhoto} className="search-card__photo--image" />{" "}
                    </div>
                    <p className="search-card__location">{business?.location}</p>
                    <p className="search-card__description">{business?.description}</p>
                    <img onClick={() => handleCardClick(business.id)} src={images.arrow} alt="right-arrow" className="search-card__arrow" />

                    <div>{business.launch}</div>

                </article>
            ))}
        </>
    )
}

export default BusinessSearchCards

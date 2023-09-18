import { useEffect } from "react";

interface BusinessSearchCardProps {
    searchTerm: string;
    images: {
        arrow: string
        photo: string
    },
    businessDetail: any,
    setBusinessDetail: any,
    businesses: any[],
    vpNorthEast: LatLng,
    vpSouthWest: LatLng,
    handleCardClick: (id: any) => void
    setNewLat: (lat: number) => void;
    setNewLng: (lng: number) => void;
    filteredBusinesses: any;
    cSearchRef: React.RefObject<HTMLDivElement | null>;
}

interface LatLng {
    lat: number;
    lng: number;
}

const BusinessSearchCards: React.FC<BusinessSearchCardProps> = ({ searchTerm, images, businessDetail, setBusinessDetail, cSearchRef, filteredBusinesses, setNewLat, setNewLng, handleCardClick }) => {


    const altPhoto = "";

    const scrollToFarLeft = () => {
        if (cSearchRef.current) {
            cSearchRef.current.style.scrollBehavior = 'smooth';
            cSearchRef.current.scrollLeft = 0;
        }
    };

    const filteredUniqueBusinesses = filteredBusinesses.filter((business: any) => business.id !== businessDetail.id);

    return (
        <>

            {businessDetail?.name ? (
                <div onClick={() => {
                    setNewLat(businessDetail?.lat);
                    setNewLng(businessDetail?.lng);
                }}

                    key={businessDetail.id} className="search-card">
                    <div className="search-card__photo">
                        <img src={businessDetail.photos[0]} alt={altPhoto} className="search-card__photo--image" />{" "}
                    </div>
                    <section className="search-card__side">
                        <h2 className="search-card__title">{businessDetail?.name}</h2>
                        <p className="search-card__location">{businessDetail?.location}</p>

                        <div className="search-card__established">🚀 {new Date(businessDetail.launch * 1000).getFullYear()}</div>

                        <p className="search-card__description">
                            {businessDetail?.description
                                ? businessDetail.description.split(' ').slice(0, 15).join(' ') + (businessDetail.description.split(' ').length > 15 ? ' ...' : '')
                                : ''}
                        </p>

                        <img onClick={() => handleCardClick(businessDetail.id)} src={images.arrow} alt="right-arrow" className="search-card__arrow" />

                    </section>

                </div>
            ) : null}

            {filteredUniqueBusinesses.map((business: any) => (

                <div onClick={() => {
                    setNewLat(business?.lat);
                    setNewLng(business?.lng);
                    setBusinessDetail(business);
                    scrollToFarLeft();
                }}

                    key={business.id} className="search-card">
                    <div className="search-card__photo">
                        <img src={business.photos[0]} alt={altPhoto} className="search-card__photo--image" />{" "}
                    </div>
                    <section className="search-card__side">
                        <h2 className="search-card__title">{business?.name}</h2>
                        <p className="search-card__location">{business?.location}</p>

                        <div className="search-card__established">🚀 {new Date(business.launch * 1000).getFullYear()}</div>

                        <p className="search-card__description">
                            {business?.description
                                ? business.description.split(' ').slice(0, 15).join(' ') + (business.description.split(' ').length > 15 ? ' ...' : '')
                                : ''}
                        </p>


                        <img onClick={() => handleCardClick(business.id)} src={images.arrow} alt="right-arrow" className="search-card__arrow" />

                    </section>

                </div>
            ))}
        </>
    )
}

export default BusinessSearchCards

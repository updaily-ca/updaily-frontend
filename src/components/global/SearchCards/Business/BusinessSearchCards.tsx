import { useEffect } from "react";
import { scrollToFarLeft } from "../../../../utils/functions";
import { useNavigate } from "react-router-dom";


interface BusinessSearchCardProps {
    searchTerm: string;
    isHomePage: boolean,
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



const BusinessSearchCards: React.FC<BusinessSearchCardProps> = ({ searchTerm, images, isHomePage, businessDetail, setBusinessDetail, cSearchRef, filteredBusinesses, setNewLat, setNewLng, handleCardClick }) => {

    const navigate = useNavigate();

    const altPhoto = "";

    const filteredUniqueBusinesses = filteredBusinesses?.filter((business: any) => business?.id !== businessDetail?.id);


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

            {filteredUniqueBusinesses?.map((business: any) => (
                business.photos && business.photos.length > 0 ? (

                    <div onClick={() => {

                        if (!isHomePage) {
                            setNewLat(business?.lat);
                            setNewLng(business?.lng);
                            setBusinessDetail(business);
                            scrollToFarLeft(cSearchRef);
                        }
                        else {
                            // console.log('is home')
                            navigate(`/explore?lat=${business.lat}&lng=${business.lng}`);
                        }
                    }}

                        key={business?.id} className="search-card">
                        {business.photos && business.photos.length > 0 && (
                            <div className="search-card__photo">
                                <img
                                    src={business.photos[0]}
                                    alt={altPhoto}
                                    className="search-card__photo--image"
                                />
                            </div>
                        )}
                        <section className="search-card__side">
                            <h2 className="search-card__title">{business?.name}</h2>
                            <p className="search-card__location">{business?.location}</p>

                            <div className="search-card__established">🚀 {new Date(business.launch * 1000).getFullYear()}</div>

                            <p className="search-card__description">

                                {business.description
                                    ? business.description.split(' ').slice(0, 15).join(' ') + (business.description.split(' ').length > 15 ? ' ...' : '')
                                    : ''}
                            </p>

                            {!isHomePage ? <img onClick={() =>
                                handleCardClick(business.id)} src={images.arrow} alt="right-arrow" className="search-card__arrow" />
                                : null}

                        </section>

                    </div>
                ) : null
            ))}
        </>
    )
}

export default BusinessSearchCards

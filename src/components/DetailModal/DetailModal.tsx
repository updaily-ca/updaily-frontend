import "./DetailModal.scss"
import closeBtn from "../../asset/detail/icons8-close-48.png"
import { useEffect, useState } from "react"
import {Carousel} from 'antd';
// Icons
import location_icon from "../../asset/detail/icons8-location-48.png";
import time_icon from "../../asset/detail/icons8-time-50.png";

interface DetailModalProp {
    business: any
    setModalOpen: (value: boolean) => void
    modalOpen: boolean
    handleModalClick: () => void
}

// Styles for Carousel
const contentStyle: React.CSSProperties = {
    height: '200px'
};

const DetailModal = ({ business, modalOpen, handleModalClick }: DetailModalProp) => {
    const { name, photos, address, openinghours, cuisine, pricerange, description } = business.business;
    const [isOpenClassAdded, setIsOpenClassAdded] = useState(false)
    const [isRendered, setIsRendered] = useState(false)

    useEffect(() => {
        setIsRendered(true)
    }, [])

    useEffect(() => {
        if (modalOpen && isRendered) {
            const timer = setTimeout(() => {
                setIsOpenClassAdded(true)
            }, 1)

            return () => clearTimeout(timer)
        } else {
            setIsOpenClassAdded(false)
        }
    }, [modalOpen, isRendered])

    const handleCloseModal = () => {
        setIsOpenClassAdded(false)
        setTimeout(() => {
            handleModalClick()
        }, 500)
    }

    return (
        <>
            {modalOpen && isRendered && (
                <div className={`modal ${isRendered && isOpenClassAdded ? "modal--open" : "modal--closed"}`}>
                    <div className="modal__content">
                        {/* <img onClick={handleCloseModal} className="modal__close-btn" src={closeBtn} alt="close btn" /> */}
                        {/* Render Images as Courasel on Mobile */}
                        <div className="hide">
                            <Carousel autoplay>
                                <div>
                                    <img className="modal__carousel-img" src={photos[0]} alt={business.name} />
                                </div>
                                <div>
                                    <img className="modal__carousel-img" src={photos[1]} alt={business.name} />
                                </div>
                                <div>
                                    <img className="modal__carousel-img" src={photos[2]} alt={business.name} />
                                </div>
                            </Carousel>
                        </div>
                        {/* Render Images for Tablet and Desktop */}
                        <div className="modal__img-container">
                            <div className="modal__img-container2">
                                <img className="modal__img modal__img1" src={photos[0]} alt={business.name} />
                            </div>
                            <div className="modal__img-container3">
                                <img className="modal__img modal__img2" src={photos[1]} alt={business.name} />
                                <img className="modal__img modal__img2" src={photos[2]} alt={business.name} />
                            </div>
                        </div>
                        {/* Info Section */}
                        <div className="business__info">
                            {/* Name, Address, Opening hours */}
                            <div className="business__info1">
                                <p className="business__title">{name}</p>
                                <div className="business__container">
                                    <img src={location_icon} alt="" className="business__icon" />
                                    <p className="business__text">Address: {address}</p>
                                </div>
                                <div className="business__container">
                                    <img src={time_icon} alt="" className="business__icon" />
                                    <p className="business__text">Time: {openinghours[0]}0 to {openinghours[1]}0 </p>
                                </div>
                            </div>
                            {/* Cuisine, Price Range, Review, and Menu */}
                            <div className="business__info2">
                                <div className="business__row1">
                                    <p className="business__cuisine">{cuisine} Cuisine</p>
                                </div>
                                <p className="business__price">Price range: {pricerange}</p>
                                <button className="business__menu-btn">Menu</button>
                            </div>
                            {/* Description */}
                            <div className="business__info3">
                                <p className="business__desc">{description}</p>
                            </div>
                            {/* Write a review button */}
                            <button className="business__review-btn">Write a review</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DetailModal

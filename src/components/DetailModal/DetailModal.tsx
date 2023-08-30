import React, { useState, useEffect } from 'react';
import closeIcon from '../../asset/detail/icons8-date-50 (1).png';

interface DetailModalProps {
    modalOpen: boolean;
    handleModalClick: () => void;
    // Add other necessary props here
}

const DetailModal: React.FC<DetailModalProps> = ({ modalOpen, handleModalClick }) => {
    const [isOpenClassAdded, setIsOpenClassAdded] = useState<boolean>(false);
    const [isRendered, setIsRendered] = useState<boolean>(false);

    useEffect(() => {
        setIsRendered(true);
    }, []);

    useEffect(() => {
        if (modalOpen && isRendered) {
            const timer = setTimeout(() => {
                setIsOpenClassAdded(true);
            }, 1);

            return () => clearTimeout(timer);
        } else {
            setIsOpenClassAdded(false);
        }
    }, [modalOpen, isRendered]);

    const handleCloseModal = () => {
        setIsOpenClassAdded(false);
        setTimeout(() => {
            handleModalClick();
        }, 500);
    };

    return (
        <>
            {modalOpen && isRendered && (
                <div id="modal" className={`modal ${isRendered && isOpenClassAdded ? 'modal--open' : 'modal--closed'}`}>
                    <div className="lightbox__content">
                        {/* Add the image source here */}
                        {/* <img className="lightbox__content--image" src=Add image source alt="Modal" /> */}
                        <div className='lightbox__content--subsection'>
                            <img className="lightbox__content--close" src={closeIcon} onClick={handleCloseModal} alt="Close Icon" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DetailModal;

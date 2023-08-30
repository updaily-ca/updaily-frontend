import "./DetailModal.scss"
import closeBtn from "../../asset/detail/icons8-close-48.png"
import { useEffect, useState } from "react"

interface DetailModalProp {
    business: any
    setModalOpen: (value: boolean) => void
    modalOpen: boolean
    handleModalClick: () => void
}

const DetailModal = ({ business, modalOpen, handleModalClick }: DetailModalProp) => {
    const { name, photos } = business.business
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
                        <img onClick={handleCloseModal} className="modal__close-btn" src={closeBtn} alt="close btn" />
                        <img className="modal__img" src={photos[0]} alt={business.name} />
                        <p>{name}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default DetailModal

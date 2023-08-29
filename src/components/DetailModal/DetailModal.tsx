import "./DetailModal.scss";
import close_btn from  "../../asset/detail/icons8-close-48.png";

interface DetailModalProp {
    business: any
    setModalOpen: (value: boolean) => void;
}

const DetailModal = ({business, setModalOpen}: DetailModalProp) => {
    const {name, photos} = business.business;
    return (
        <div className="modal">
            <div className="modal__content">
                <img onClick={()=>setModalOpen(false)} className="modal__close-btn" src={close_btn} alt="close btn"/>
                <img className="modal__img" src={photos[0]} alt={business.name}/>
                <p>{business?.business.name}</p>
            </div>
        </div>
    );
};

export default DetailModal;

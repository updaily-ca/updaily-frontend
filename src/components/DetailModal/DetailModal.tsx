import "./DetailModal.scss";

interface DetailModalProp {
    business: any
    setModalOpen: (value: boolean) => void;
}

const DetailModal = ({business, setModalOpen}: DetailModalProp) => {
    return (
        <div className="modal">
            <div className="modal__content">
                Hello World
                <button onClick={()=> setModalOpen(false)}>Close</button>
            </div>
        </div>
    );
};

export default DetailModal;

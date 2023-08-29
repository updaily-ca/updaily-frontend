import {Modal} from "antd";

interface DetailModal {
    modalOpen: boolean,
    setModalOpen: (value: boolean) => void
}
const DetailModal = ({modalOpen, setModalOpen}: DetailModal) => {
    return (
        <>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
};

export default DetailModal;

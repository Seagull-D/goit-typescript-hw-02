import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");
interface PropsImageModal {
  isOpen: boolean;
  imageUrl: string;
  onRequestClose: () => void;
}
const ImageModal: React.FC<PropsImageModal> = ({
  isOpen,
  imageUrl,
  onRequestClose,
}): JSX.Element => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={s.Modal}
      overlayClassName={s.Overlay}
    >
      <img src={imageUrl} alt="Large view" className={s.modalImage} />
    </Modal>
  );
};

export default ImageModal;

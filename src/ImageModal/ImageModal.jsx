import css from "./ImageModal.module.css";

const ImageModal = ({ modal, setModalOpen }) => {
  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modal}></div>
      </div>
    </>
  );
};

export default ImageModal;

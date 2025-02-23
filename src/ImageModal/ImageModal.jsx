import css from "./ImageModal.module.css";

const ImageModal = ({ modal }) => {
  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <img className={css.modalImg} src={modal.imgSrc} alt={modal.alt} />
        </div>
      </div>
    </>
  );
};

export default ImageModal;

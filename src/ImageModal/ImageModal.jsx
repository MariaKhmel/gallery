import css from "./ImageModal.module.css";

const ImageModal = ({ modal, closeModal }) => {
  const handleEsc = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  document.addEventListener("keydown", handleEsc);

  return (
    <>
      <div className={css.backdrop} onClick={() => closeModal()}>
        <div className={css.modal}>
          <img className={css.modalImg} src={modal.imgSrc} alt={modal.alt} />
        </div>
      </div>
    </>
  );
};

export default ImageModal;

import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description, openModal }) => {
  return (
    <>
      <img
        src={urls.small}
        alt={description}
        onClick={() => openModal(urls.regular)}
        className={css.image}
      />
    </>
  );
};

export default ImageCard;

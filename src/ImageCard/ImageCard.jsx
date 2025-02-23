import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt, openModal }) => {
  return (
    <img
      src={urls.small}
      alt={alt}
      onClick={() => openModal({ imgSrc: urls.regular, alt })}
      className={css.img}
    />
  );
};

export default ImageCard;

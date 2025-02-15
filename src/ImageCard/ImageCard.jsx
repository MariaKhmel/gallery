import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description }) => {
  return (
    <>
      <img src={urls.small} alt={description} className={css.image} />
    </>
  );
};

export default ImageCard;

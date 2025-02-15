import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard urls={image.urls} alt={image.description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

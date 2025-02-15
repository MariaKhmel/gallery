const ImageCard = ({ urls, description }) => {
  return (
    <>
      <img src={urls.small} alt={description} />
    </>
  );
};

export default ImageCard;

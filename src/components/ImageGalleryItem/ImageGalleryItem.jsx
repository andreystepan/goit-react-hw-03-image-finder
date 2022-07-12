export const ImageGalleryItem = ({ smallImg, alt, onClick, largeImg }) => {
  return (
    <li onClick={() => onClick(largeImg)}>
      <img src={smallImg} alt={alt} />
    </li>
  );
};

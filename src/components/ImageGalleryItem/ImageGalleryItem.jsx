import PropTypes from 'prop-types';
import { ImageItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, query, onClick, largeImg }) => {
  return (
    <ImageItem onClick={() => onClick(largeImg)}>
      <Image src={smallImg} alt={query} />
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

import { ImageGalleryItem } from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ query, images, onClick }) => {
  return (
    <>
      {images.length > 0 && (
        <Gallery>
          {images.map(({ webformatURL, largeImageURL, id }) => (
            <ImageGalleryItem
              onClick={onClick}
              query={query}
              key={id}
              smallImg={webformatURL}
              largeImg={largeImageURL}
            />
          ))}
        </Gallery>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
  query: PropTypes.string,
};

import { ImageGalleryItem } from 'components/ImageGalleryItem';

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

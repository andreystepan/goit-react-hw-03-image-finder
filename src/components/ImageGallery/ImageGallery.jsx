import { ImageGalleryItem } from 'components/ImageGalleryItem';

import { Component } from 'react';
import API from '../../API/API';
import { Loader } from '../Loader';
import { BtnLoadMore } from 'components/Button';
import { Modal } from '../Modal';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = { largeImg: null, images: [], page: 1, loading: false };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;
    if (prevProps.query !== query) {
      this.setState({ page: 1 });
      return this.getImages(true);
    }

    if (prevState.page !== page && page !== 1) {
      return this.getImages(false);
    }
  }
  getImages = newQuery => {
    const { query } = this.props;
    // const { page } = this.state;
    const page = newQuery ? 1 : this.state.page;
    this.setState({ loading: true });

    API.fetchApi(query, page)
      .then(data =>
        this.setState(prevState => ({
          images: newQuery ? data.hits : [...prevState.images, ...data.hits],
        }))
      )
      .finally(() => this.setState({ loading: false }));
  };

  handleClickImg = largeImg => {
    this.setState({ largeImg });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };
  render() {
    const { images, loading, largeImg } = this.state;
    const { query } = this.props;
    return (
      <>
        {loading && <Loader />}
        <Gallery>
          {images.map(({ webformatURL, largeImageURL, id }) => (
            <ImageGalleryItem
              onClick={this.handleClickImg}
              query={query}
              key={id}
              smallImg={webformatURL}
              largeImg={largeImageURL}
            />
          ))}
        </Gallery>

        {images.length > 0 && <BtnLoadMore onClick={this.loadMore} />}
        {largeImg && (
          <Modal largeImg={largeImg} query={query} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

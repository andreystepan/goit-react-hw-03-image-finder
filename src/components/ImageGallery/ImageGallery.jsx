import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Component } from 'react';
import API from '../../API/API';
import { Loader } from '../Loader';

export class ImageGallery extends Component {
  state = { largeImg: null, images: [], page: 1, loading: false };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;
    if (prevProps.query !== query) {
      this.setState({ loading: true });

      API.fetchApi(query, page)
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleClickImg = largeImg => {
    this.setState({ largeImg });
  };
  render() {
    const { images, loading } = this.state;
    const { query } = this.props;
    return (
      <ul>
        {loading && <Loader />}
        <h1>{query}</h1>
        {images.map(({ webformatURL, largeImageURL, id }) => (
          <ImageGalleryItem
            onClick={this.handleClickImg}
            alt={query}
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

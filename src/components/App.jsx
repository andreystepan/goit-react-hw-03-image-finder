import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import API from 'API/API';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { BtnLoadMore } from 'components/Button';

const imgMapper = dataHits => {
  return dataHits.map(({ id, webformatURL, largeImageURL }) => {
    return { id, webformatURL, largeImageURL };
  });
};

export class App extends Component {
  state = {
    query: '',
    loading: false,
    images: [],
    page: 1,
    largeImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    const { page } = this.state;
    if (prevState.query !== query) {
      this.setState({ page: 1 });
      return this.getImages(true);
    }

    if (prevState.page !== page && page !== 1) {
      return this.getImages(false);
    }
  }

  getImages = newQuery => {
    const { query } = this.state;

    const page = newQuery ? 1 : this.state.page;
    this.setState({ loading: true });

    API.fetchApi(query, page)
      .then(data =>
        this.setState(prevState => ({
          images: newQuery
            ? imgMapper(data.hits)
            : [...prevState.images, ...imgMapper(data.hits)],
        }))
      )
      .finally(() => this.setState({ loading: false }));
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleClickImg = largeImg => {
    this.setState({ largeImg });
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  render() {
    const { loading, images, largeImg, query } = this.state;
    return (
      <div>
       
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        <ImageGallery
          query={query}
          images={images}
          onClick={this.handleClickImg}
        />
         {loading && <Loader />}

        {images.length > 0 && <BtnLoadMore onClick={this.loadMore} />}

        {largeImg && (
          <Modal largeImg={largeImg} query={query} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

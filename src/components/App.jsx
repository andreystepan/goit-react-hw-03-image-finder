import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    query: '',
    loading: false,
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading && <Loader />}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

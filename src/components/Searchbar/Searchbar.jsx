import { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import {
  SearchHeader,
  SearchForm,
  BtnSearchForm,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
    images: [],
  };

  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Введите имя запроса');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <BtnSearchForm type="submit">
            <BsSearch />
          </BtnSearchForm>
          <Input
            onChange={this.handleChange}
            value={this.state.query}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

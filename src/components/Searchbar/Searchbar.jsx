import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    const { query, value } = e.currentTarget;

    this.setState({ [query]: value });
  };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({query:''})
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            onChange={this.handleChange}
            value={this.state.query}
            name="query"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

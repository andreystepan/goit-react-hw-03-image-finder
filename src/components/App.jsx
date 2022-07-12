import { Searchbar } from './Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
  };
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Searchbar />
      </div>
    );
  }
}

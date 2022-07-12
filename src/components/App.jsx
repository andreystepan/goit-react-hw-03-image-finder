import { Searchbar } from './Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
  };
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

import { Searchbar } from './Searchbar';

export const App = () => {
  state = {
    query: '',
  };

  return (
    <div>
      <Searchbar />
    </div>
  );
};

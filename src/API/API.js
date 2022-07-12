const fetchApi = (query, page = 1) => {
  const API_KEY = '27728909-9cfd380db3bf4e34a59031529';

  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`We're sorry, nothing is found for "${query}".`)
    );
  });
};

const api = { fetchApi };

export default api;
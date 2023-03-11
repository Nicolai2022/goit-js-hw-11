const axios = require('axios').default;

export default class CardsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchCards(searchQuery) {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=34102609-f84f9031f7cc384142e1c0663&q=${this.searchQuery}&page=${this.page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`
      );
      this.page += 1;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  currentPage() {
    return this.page - 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
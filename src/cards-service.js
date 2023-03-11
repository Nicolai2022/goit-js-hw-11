const axios = require('axios').default;

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '34102609-f84f9031f7cc384142e1c0663';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}



// export default class CardsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   // fetchCards(searchQuery) {
//   //   return fetch(
//   //     `https://pixabay.com/api/?key=34223643-b3db1c288a37bd2710c13c9b4&q=${this.searchQuery}&page=${this.page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`
//   //   )
//   //     .then(response => {
//   //       return response.json();
//   //     })
//   //     .then(({ hits }) => {
//   //       this.page += 1;
//   //       return hits;
//   //     });
//   // }

//   async fetchCards(searchQuery) {
//     try {
//       const response = await axios.get(
//         `https://pixabay.com/api/?key=34102609-f84f9031f7cc384142e1c0663&q=${this.searchQuery}&page=${this.page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`
//       );
//       this.page += 1;
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   currentPage() {
//     return this.page - 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

const axios = require('axios').default;

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '34102609-f84f9031f7cc384142e1c0663';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}
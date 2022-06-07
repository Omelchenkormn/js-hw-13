import axios from 'axios';

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '27783872-f200130df473948fa8b794bc2';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=16&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response=> response.data);
}


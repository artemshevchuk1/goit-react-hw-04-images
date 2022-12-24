// import axios from 'axios';

// export const fetchImages = async (searchQuery, page) => {
//   const API_KEY = '29436484-c6ad55a4fc43be985da26569b';
//   const BASE_URL = 'https://pixabay.com/api/';
//   const images = await axios.get(
//     `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return images.data;
// };


import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchImagesWithQuery(searchQuery, page) {

  const API_KEY = '29436484-c6ad55a4fc43be985da26569b';
  const BASE_URL = 'https://pixabay.com/api/';
  const response = axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
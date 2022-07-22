import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=c0a65f93ad9c41c31d77ca2daaf180b1
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c0a65f93ad9c41c31d77ca2daaf180b1';

const customAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const searchMovies = async query => {
  const response = await customAxios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=true`
  );
  return response.data.results;
};

export const getTrending = async () => {
  const response = await customAxios.get(
    `/trending/all/week?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getDetails = async movieId => {
  const response = await customAxios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getCast = async movieId => {
  const response = await customAxios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await customAxios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

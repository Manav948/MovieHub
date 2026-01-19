import axios from 'axios';

const API_KEY = '64681486';
const BASE_URL = 'https://www.omdbapi.com/';

export const getPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}?s=venom&avengers&type=movie&apikey=${API_KEY}`);
  return res.data.Response === 'True' ? res.data.Search : [];
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}?s=${query}&type=movie&apikey=${API_KEY}`);
  return res.data.Response === 'True' ? res.data.Search : [];
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return res.data.Response === 'True' ? res.data : null;
};

export const searchTvShows = async (query) => {
  const res = await axios.get(`https://www.omdbapi.com/?s=${query}&type=series&apikey=64681486`);
  return res.data.Response === 'True' ? res.data.Search : [];
};

export const getTvShowDetails = async (id) => {
  const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=64681486`);
  return res.data.Response === 'True' ? res.data : null;
};

export const getPopularTvShows = async () => {
  const res = await axios.get(`https://www.omdbapi.com/?s=friends&type=series&apikey=64681486`);
  return res.data.Response === 'True' ? res.data.Search : [];
};

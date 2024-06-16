// utils/tmdb.js
import axios from 'axios';

const TMDB_API_KEY = 'cabed56bcb5d47685a5b62ec7937f792';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key:TMDB_API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies from TMDb:', error);
    throw error;
  }
};

// routes/moviesOnline.js
import express from 'express';
import { fetchMovies } from '../utils/tmdb.js';

const router = express.Router();

router.get('/online', async (req, res) => {
  try {
    const movies = await fetchMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
});

export default router;

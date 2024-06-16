import express from 'express';
import { getMovies, createMovie } from '../controllers/movieController.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovie);

export default router;

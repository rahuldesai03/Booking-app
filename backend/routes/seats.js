import express from 'express';
import { getSeats, createSeat } from '../controllers/seatController.js';

const router = express.Router();

router.get('/', getSeats);
router.post('/', createSeat);

export default router;

import express from 'express';
import { getScreens, createScreen } from '../controllers/screenController.js';

const router = express.Router();

router.get('/', getScreens);
router.post('/', createScreen);

export default router;

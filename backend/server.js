import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/bookings.js';
import movieRoutes from './routes/movies.js';
import screenRoutes from './routes/screens.js';
import seatRoutes from './routes/seats.js';
import menuRoutes from './routes/menu.js';
import moviesOnlineRoutes from './routes/moviesOnline.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/screens', screenRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/movies', moviesOnlineRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

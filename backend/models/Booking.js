import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  seats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seat',
    required: true
  }],
  showtime: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);

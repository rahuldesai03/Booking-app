import mongoose from 'mongoose';

const seatSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false
  },
  screen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Screen',
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Seat', seatSchema);

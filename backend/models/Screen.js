import mongoose from 'mongoose';

const screenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  totalSeats: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Screen', screenSchema);

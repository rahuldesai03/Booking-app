import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  showtimes: [{
    type: Date,
    required: true
  }]
}, { timestamps: true });

export default mongoose.model('Movie', movieSchema);

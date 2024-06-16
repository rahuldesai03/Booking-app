import Seat from '../models/Seat.js';

export const getSeats = async (req, res) => {
  try {
    const seats = await Seat.find();
    res.json(seats);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createSeat = async (req, res) => {
  const { number, screenId } = req.body;
  try {
    const seat = new Seat({ number, screen: screenId });
    await seat.save();
    res.status(201).json(seat);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

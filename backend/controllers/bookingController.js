import Booking from '../models/Booking.js';
import Seat from '../models/Seat.js';
import sendEmail from '../utils/sendEmail.js';

export const createBooking = async (req, res) => {
  const { movieId, seatIds, showtime, totalPrice } = req.body;
  try {
    const booking = new Booking({
      user: req.user.id,
      movie: movieId,
      seats: seatIds,
      showtime,
      totalPrice
    });

    await booking.save();

    for (const seatId of seatIds) {
      const seat = await Seat.findById(seatId);
      seat.isBooked = true;
      await seat.save();
    }

    const user = req.user;
    const emailContent = `
      <h1>Booking Confirmation</h1>
      <p>Movie: ${booking.movie.title}</p>
      <p>Showtime: ${booking.showtime}</p>
      <p>Seats: ${booking.seats.join(', ')}</p>
      <p>Total Price: ${booking.totalPrice}</p>
    `;
    sendEmail(user.email, 'Booking Confirmation', emailContent);

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('movie').populate('seats');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

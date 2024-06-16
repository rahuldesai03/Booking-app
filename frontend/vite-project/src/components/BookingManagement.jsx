import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('/api/bookings');
      setBookings(response.data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Booking Management</h2>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl mb-2">Existing Bookings</h3>
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id} className="mb-2">
              {booking.user.name} booked {booking.seats.join(', ')} for {booking.movie.title} on {new Date(booking.showtime).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingManagement;

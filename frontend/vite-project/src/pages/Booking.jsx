// src/pages/Booking.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeatSelection from '../components/SeatSelection';

const Booking = () => {
    const { id } = useParams();
    const [showtime, setShowtime] = useState('7:00 PM'); // Example showtime, you can adjust this

    return (
        <div className="booking-page p-4">
            <h2 className="text-2xl font-bold">Booking for Movie ID: {id}</h2>
            <SeatSelection movieId={id} showtime={showtime} />
        </div>
    );
};

export default Booking;

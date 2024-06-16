// src/components/SeatSelection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatSelection = ({ movieId, showtime }) => {
    const [seats, setSeats] = useState([]); // Ensure initial state is an array
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        const fetchSeats = async () => {
            try {
                const response = await axios.get(`/api/seats?movieId=${movieId}&showtime=${showtime}`);
                setSeats(response.data.seats);
            } catch (error) {
                console.error('Error fetching seats:', error);
            }
        };
        fetchSeats();
    }, [movieId, showtime]);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    if (!Array.isArray(seats)) {
        return <div>Loading...</div>; // Handle non-array state gracefully
    }

    return (
        <div className="seat-selection">
            <h2>Select Your Seats</h2>
            <div className="seats-grid">
                {seats.map((seat) => (
                    <div
                        key={seat.id}
                        className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                        onClick={() => handleSeatClick(seat)}
                    >
                        {seat.number}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeatSelection;

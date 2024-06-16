// src/pages/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`/api/movies/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading movie details...</div>;
    }

    return (
        <div className="movie-details p-4">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="text-gray-700">{movie.overview}</p>
            <Link to={`/booking/${movie.id}`} className="text-blue-500">Book Now</Link>
        </div>
    );
};

export default MovieDetails;

// src/pages/Home.jsx
import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { movies } = useContext(MovieContext);

    if (!Array.isArray(movies)) {
        return <div>Loading movies...</div>;
    }

    return (
        <div className="movie-list p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-item p-4 border rounded shadow-md">
                    <h3 className="text-lg font-bold">{movie.title}</h3>
                    <p className="text-gray-700">{movie.overview}</p>
                    <Link to={`/movie/${movie.id}`} className="text-blue-500">View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;

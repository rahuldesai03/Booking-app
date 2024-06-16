// src/components/MovieList.jsx
import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    if (!Array.isArray(movies)) {
        return <div>Loading...</div>; // Handle non-array state gracefully
    }

    return (
        <div className="movie-list p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-item p-4 border rounded shadow-md">
                    <h3 className="text-lg font-bold">{movie.title}</h3>
                    <p className="text-gray-700">{movie.overview}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;

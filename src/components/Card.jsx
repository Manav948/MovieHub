import React from 'react';
import { useMovieContext } from '../context/MovieContext';
function Card({ movie }) {
  const { addMovie, removeMovie, isFavourite } = useMovieContext();
  const favorites = isFavourite(movie.imdbID);

  const handleButton = (e) => {
    e.preventDefault();
    if (favorites) {
      removeMovie(movie.imdbID);
    } else {
      addMovie(movie);
    }
    console.log(movie)
  }
  return (
    <div className="w-full max-w-xs text-white border border-white rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500 m-4 animate-fade-in-up">
      <div className="relative h-80 overflow-hidden">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleButton}
          className={`absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xl rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300 ${favorites ? 'text-red-500' : 'hover:text-red-400'
            }`}
        >
          {favorites ? '❤️' : '🤍'}
        </button>
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-xs px-2 py-1 rounded">
          {movie.Type?.toUpperCase()}
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold truncate">{movie.Title}</h3>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <span>{movie.Year}</span>

        </div>
        <button className="mt-2 w-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 hover:bg-indigo-500 text-sm py-2 rounded-xl transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;

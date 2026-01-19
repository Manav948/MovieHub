import React from 'react';
import { useMovieContext } from "../context/MovieContext";

function Tvshow({ show }) {
  const { addShow, removeShow, isShowFavourite } = useMovieContext();

  if (!show) return null;

  const favourite = isShowFavourite(show.imdbID);

  const handleAddShow = (e) => {
    e.preventDefault();
    if (favourite) {
      removeShow(show.imdbID);
    } else {
      addShow(show);
    }
  };

  return (
    <div className="w-full max-w-xs bg-gray-800 text-white rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500 m-4 animate-fade-in-up">
      <div className="relative h-80 overflow-hidden">
        <img
          src={show.Poster !== 'N/A' ? show.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={show.Title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleAddShow}
          className={`absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xl rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300 ${
            favourite ? 'text-red-500' : 'hover:text-red-400'
          }`}
        >
          {favourite ? '❤️' : '🤍'}
        </button>
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-xs px-2 py-1 rounded">
          {show.Type?.toUpperCase()}
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold truncate">{show.Title}</h3>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <span>{show.Year}</span>
        </div>
        <button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-500 text-sm py-2 rounded-xl transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Tvshow;

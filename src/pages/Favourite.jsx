import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import Card from '../components/Card';

function Favourite() {
  const handleButton = () => {
    window.location.href = '/tv-show';
  }
  const { movies, shows } = useMovieContext();    
  
  if (!movies.length && !shows.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-white px-4 animate-fade-in">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">❤️ Your Favourite Movies & Shows</h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            You haven't added any movies or shows to your favourites yet. Start exploring and add your top picks to keep track of them!
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Favourites"
            className="w-40 h-40 mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
          <button onClick={handleButton} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Browse Movies & Shows
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-white px-4 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        ❤️ Your Favourite {movies.length > 0 && shows.length > 0 ? 'Movies & Shows' : movies.length > 0 ? 'Movies' : 'Shows'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.length > 0 && movies.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
        {shows.length > 0 && shows.map((show) => (
          <Card key={show.imdbID} movie={show} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;

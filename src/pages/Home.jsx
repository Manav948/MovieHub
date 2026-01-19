import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { searchMovies, getPopularMovies } from '../services/api';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(searchQuery);
      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-24 max-w-7xl mx-auto">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-wrap gap-2 items-center justify-center mb-8"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500 text-white"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Search
        </button>
      </form>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <p className="text-white text-center col-span-full">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;

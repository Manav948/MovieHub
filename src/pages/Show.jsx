import React, { useEffect, useState } from "react";
import { getPopularTvShows, searchTvShows } from "../services/api"; // Import your API functions
import Tvshow from "../components/Tvshow"; // The individual show card component

function ShowsPage() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getPopularTvShows();
        setShows(data);
      } catch (err) {
        setError("Failed to load shows.");
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!searchQuery) {
      const data = await getPopularTvShows();
      setShows(data);
      setLoading(false);
      return;
    }

    try {
      const searchResults = await searchTvShows(searchQuery);
      if (searchResults?.length > 0) {
        setShows(searchResults);
      } else {
        setShows([]);
        setError("No TV shows found.");
      }
    } catch (err) {
      setError("An error occurred during the search.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-24 max-w-7xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap gap-2 items-center justify-center mb-8"
      >
        <input
          type="text"
          placeholder="Search for TV shows..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500 text-white bg-gray-800"
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
          {shows?.length > 0 ? (
            shows.map((show) => (
              <Tvshow key={show.imdbID} show={show} /> 
            ))
          ) : (
            <p className="text-white text-center col-span-full">No shows found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowsPage;

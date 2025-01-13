import { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import { searchMovies, searchShows } from '../services/api'
import MovieCard from '../components/MovieCardSearch';
import TvShowCard from '../components/TvShowCardSearch';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); 

    return () => clearTimeout(timer);  
  }, [searchQuery]);

  useEffect(() => { 
    if (!debouncedSearchQuery.trim()) {
      setMovies([]);
      setTvShows([]);
      return;
    }

    const searchMoviesAndTvShows = async () => {
      setLoading(true);
      setError(null);

      try {
 
        const [movieResults, tvShowResults] = await Promise.all([
          searchMovies(debouncedSearchQuery),
          searchShows(debouncedSearchQuery),
        ]);

     
        setMovies(movieResults);
        setTvShows(tvShowResults);
      } catch (err) {
        setError('Failed to search.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    searchMoviesAndTvShows();
  }, [debouncedSearchQuery]);  

  return (
    <div className="search-area">
      <form className="search-form">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search Movie or TV Show"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" className="search-button">
            <ImSearch id="search-icon" />
          </button>
        </div>
      </form>

   
      {searchQuery.trim() === '' && !loading && !error && (
        <p className="start-searching">Start Searching</p>
      )}

     
      {loading && <p className="start-searching">Loading...</p>} 

      
      {error && <p className="error">{error}</p>}

 
      {searchQuery.trim() !== '' && movies.length === 0 && tvShows.length === 0 && !loading && !error && (
        <p className="no-results">No results found.</p>
      )}

       
      <div className="results-container">
        {movies.length > 0 && (
          <div className="movie-container-search">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        )}

        {tvShows.length > 0 && (
          <div className="movie-container-search">
            {tvShows.map((tvshow, index) => (
              <TvShowCard key={index} tvshow={tvshow} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;

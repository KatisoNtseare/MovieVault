import { useRef } from 'react';
import MovieCard from './MovieCard';
import { getTrending } from '../../../backend/services/api';
import FetchHooks from '../hooks/FetchHooks';
import ScrollButtons from './useHorizontalScroll';  

function PopularMovies() {
  const { data: movies, error, loading } = FetchHooks(getTrending);
  const movieContainerRef = useRef(null);  

  return (
    <div className="popular-movies">
      <h2>Popular Movies of 2024</h2>
      
      <ScrollButtons containerRef={movieContainerRef} />  
      
      <div ref={movieContainerRef} className="movie-container">
        {error && <div>{error}</div>}
        
        {loading ? (
          <div>Loading...</div>
        ) : (
          movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <div>No movies available</div>
          )
        )}
      </div>
    </div>
  );
}

export default PopularMovies;

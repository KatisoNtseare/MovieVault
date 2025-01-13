import { useRef } from 'react';
import MovieCard from '../MovieCard';
import { getComedy } from '../../services/api';
import FetchHooks from '../../hooks/FetchHooks';
import ScrollButtons from '../useHorizontalScroll';  

function Comedy() {
  const { data: movies, error, loading } = FetchHooks(getComedy);
  const movieContainerRef = useRef(null);  

  return (
    <div className="popular-movies">
      <h2>Comedy</h2>
      
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

export default Comedy;

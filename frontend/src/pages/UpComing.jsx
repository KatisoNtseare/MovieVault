import { useRef } from 'react';
import MovieCard from '../components/MovieCardSearch';
import { getUpComming } from '../../../backend/services/api';
import FetchHooks from '../hooks/FetchHooks'; 

function UpComing() {
  const { data: movies, error, loading } = FetchHooks(getUpComming);
  const movieContainerRef = useRef(null);  
  
  return (
    <div className="popular-movies ajus1">
      <h2>Up-Coming</h2>
      
       
      
      <div ref={movieContainerRef} className="movie-container-search ajus2">
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

export default UpComing;

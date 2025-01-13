import { useRef } from 'react';
import MovieCard from '../components/MovieCardSearch';
import { getAllMovies } from '../../../backend/services/api';
import FetchHooks from '../hooks/FetchHooks'; 

function Movies() {
  const { data: movies, error, loading } = FetchHooks(getAllMovies);
  const movieContainerRef = useRef(null);  
  
  return (
    <div className="popular-movies ajus1">
      <h2>Movies</h2> 
      
       
      
      <div ref={movieContainerRef} className="movie-container-search ajus2">
        {error && <div>{error}</div>}
        
        {loading ? (
          <div className='start-searching'>Loading...</div>
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

export default Movies;

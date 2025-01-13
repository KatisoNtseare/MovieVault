import { useRef } from 'react';
import TvCard from './TvCard';
import { getKdrama } from '../../../backend/services/api';
import FetchHooks from '../hooks/FetchHooks';
import ScrollButtons from './useHorizontalScroll';

function Kdrama() {
  const { data: movies, error, loading } = FetchHooks(getKdrama);
  const movieContainerRef = useRef(null);

  return (
    <div className="popular-movies">
      <h2>K-DRAMA</h2>

      <ScrollButtons containerRef={movieContainerRef} />

      <div ref={movieContainerRef} className="movie-container">
        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading-message">Loading...</div>
        ) : (
          movies && movies.length > 0 ? (
            movies.map((tv) => (
              <TvCard key={tv.id} tv={tv} />
            ))
          ) : (
            <div>No movies available</div>
          )
        )}
      </div>
    </div>
  );
}

export default Kdrama;

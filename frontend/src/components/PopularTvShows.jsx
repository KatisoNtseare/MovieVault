import { useRef } from 'react';
import TvCard from './TvCard';
import { getTrendingShows } from '../services/api';
import FetchHooks from '../hooks/FetchHooks';
import ScrollButtons from './useHorizontalScroll';

function PopularTvShows() {
  const { data: movies, error, loading } = FetchHooks(getTrendingShows);
  const movieContainerRef = useRef(null);

  return (
    <div className="popular-movies">
      <h2>Popular TV Shows</h2>

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

export default PopularTvShows;

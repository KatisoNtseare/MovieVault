

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;
  const title = movie.title  ;
  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : ''  ;
  const overview = movie.overview;

  return (
    <div className="search-movie">
      {imageUrl ? <img src={imageUrl} alt={title} /> : <div className="no-image">No Image</div>}
      <h3>{title}</h3>
      {releaseYear && <p>{releaseYear}</p>}
      {/*<p>{overview}</p>*/}
    </div>
  );
}

export default MovieCard;

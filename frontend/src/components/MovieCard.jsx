

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500'; 
  const title = movie.title;
  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : '';
  const overview = movie.overview;  

  return (
    <div className="movie">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      {releaseYear && <p>{releaseYear}</p>}
      {/*{overview && <p>{overview}</p>}*/}
    </div>
  );
}

export default MovieCard;

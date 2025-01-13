

function TvShowCard({ tvshow }) { 
  const imageUrl = `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`;
  const title = tvshow.name;   
  const releaseYear = tvshow.first_air_date ? tvshow.first_air_date.split('-')[0] : '';  // Use 'first_air_date' for TV shows
  const overview = tvshow.overview;

  return (
    <div className="search-movie">
      {imageUrl ? <img src={imageUrl} alt={title} /> : <div className="no-image">No Image</div>}
      <h3>{title}</h3>
      {releaseYear && <p>{releaseYear}</p>}
      {/*<p>{overview}</p>*/}   
    </div>
  );
}

export default TvShowCard;

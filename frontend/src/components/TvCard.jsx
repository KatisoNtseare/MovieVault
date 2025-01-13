

function TvCard({ tv }) {
  const imageUrl = tv.poster_path ? `https://image.tmdb.org/t/p/w500${tv.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie">
      <img src={imageUrl} alt={tv.name} />
      <h3>{tv.name}</h3>
      <p>{tv.first_air_date ? tv.first_air_date.split('-')[0] : "N/A"}</p>
    </div>
  );
}

export default TvCard;

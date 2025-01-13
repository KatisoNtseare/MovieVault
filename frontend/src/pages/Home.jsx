import Banner from '../components/Banner';
import PopularMovies from '../components/PopularMovies';
import Romance from '../components/movieGenres/Romance';
import Action from '../components/movieGenres/Action'; 
import Adventure from '../components/movieGenres/Adventure'; 
import SciFi from '../components/movieGenres/SciFi';
import Documentary from '../components/movieGenres/Documentary';
import Thriller from '../components/movieGenres/Thriller';
import Animation from '../components/movieGenres/Animation';
import Horror from '../components/movieGenres/Horror';
import Western from '../components/movieGenres/Western';
import Comedy from '../components/movieGenres/Comedy';
import PopularTvShows from '../components/PopularTvShows';
import Kdrama from '../components/Kdrama';
import Crime from '../components/movieGenres/Crime';
 
function Home() {

  return (
    <main>
      <Banner />
      <PopularMovies />
      <PopularTvShows />
      <Crime />
      <Romance />
      <Kdrama />
      <Horror /> 
      <Comedy />
      <Action />  
      <Adventure /> 
      <Animation />
      <SciFi />
      <Documentary />
      <Thriller />
      <Western />
    </main>
  );
}

export default Home;

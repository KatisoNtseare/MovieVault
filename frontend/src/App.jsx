import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows'
import UpComing from './pages/UpComing';
import Footer from './components/Footer';

import Action from './pages/Action';
import Drama from './pages/Drama';
import Comedy from './pages/Comedy';
import Horror from './pages/Horror';
import Crime from './pages/Crime';
import Documentary from './pages/Documentary';
import RealityShows from './pages/RealityShows';
import Thriller from './pages/Triller';
import Movies2024 from './pages/2024';
import Movies2023 from './pages/2023';
import Movies2022 from './pages/2022';
import Movies2021 from './pages/2021';

function App() {
  return ( 
      <BrowserRouter>   
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/TvShows' element={<TvShows />} />
        <Route path='/UpComing' element={<UpComing />} />
        <Route path='/Action' element={<Action />} />
        <Route path='/Drama' element={<Drama />} />
        <Route path='/Comedy' element={<Comedy />} />
        <Route path='/Horror' element={<Horror />} />
        <Route path='/Crime' element={<Crime />} />
        <Route path='/Documentary' element={<Documentary />} />
        <Route path='/RealityShows' element={<RealityShows />} />
        <Route path='/Thriller' element={<Thriller />} />
        <Route path='/Movies2024' element={<Movies2024 />} />
        <Route path='/Movies2023' element={<Movies2023 />} />
        <Route path='/Movies2022' element={<Movies2022 />} />
        <Route path='/Movies2021' element={<Movies2021 />} />
      </Routes>
      <Footer />
    </BrowserRouter>   
  );
}

export default App;

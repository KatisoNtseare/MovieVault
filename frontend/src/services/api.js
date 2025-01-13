const API_KEY = "fb9c39bd061008a81cbd681ada612965";  
const PREFIX_URL = 'https://api.themoviedb.org/3';

 
export const getTrending = async () => {
  try {
    const response = await fetch(`${PREFIX_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);  
    throw new Error('Failed to fetch trending movies');
  }
};

 
export const getTrendingShows = async () => {
  try {
    const response = await fetch(`${PREFIX_URL}/tv/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch TV shows');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch trending TV shows');
  }
};

 
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${PREFIX_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    const data = await response.json(); 
    const validMovies = data.results.filter(movie => 
      movie.title && movie.poster_path && movie.release_date
    );

    return validMovies; 
  } catch (error) {
    console.error(error);
    throw new Error('Failed to search movies');
  }
};

export const searchShows = async (query) => {
  try {
    const response = await fetch(
      `${PREFIX_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error('Failed to search TV shows');
    }
    const data = await response.json();

    // Filtering valid TV shows
    const validShows = data.results.filter(tvshow => 
      tvshow.name && tvshow.poster_path && tvshow.first_air_date
    );

    return validShows;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to search TV shows');
  }
};



 
const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await fetch(`${PREFIX_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data for genre ${genreId}: ${response.statusText}`);
    }
    const data = await response.json();
    
    if (!data.results) {
      throw new Error('No results found for the given genre');
    }
    
 
    const validMovies = data.results.filter(movie => 
      movie.title && movie.poster_path && movie.release_date
    );
    return validMovies;
  } catch (error) {
    console.error(`Error fetching movies for genre ${genreId}:`, error);
    return [];
  }
};

 
export const getAction = async () => fetchMoviesByGenre(28);  
export const getAdventure = async () => fetchMoviesByGenre(12); 
export const getAnimation = async () => fetchMoviesByGenre(16); 
export const getComedy = async () => fetchMoviesByGenre(35); 
export const getDocumentary = async () => fetchMoviesByGenre(99); 
export const getRomance = async () => fetchMoviesByGenre(10749); 
export const getHorror = async () => fetchMoviesByGenre(27); 
export const getScienceFiction = async () => fetchMoviesByGenre(878); 
export const getThriller = async () => fetchMoviesByGenre(53); 
export const getWestern = async () => fetchMoviesByGenre(37);  
export const getCrime = async () => fetchMoviesByGenre(80)



const fetchMoviesByYear = async (year) => {
  try {
    const response = await fetch(`${PREFIX_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=${year}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data for genre ${year}: ${response.statusText}`);
    }
    const data = await response.json();
    
    if (!data.results) {
      throw new Error('No results found for the given genre');
    }
    
 
    const validMovies = data.results.filter(movie => 
      movie.title && movie.poster_path && movie.release_date
    );
    return validMovies;
  } catch (error) {
    console.error(`Error fetching movies for genre ${year}:`, error);
    return [];
  }
};

export const get2024 = async () => fetchMoviesByYear(2024)
export const get2023 = async () => fetchMoviesByYear(2023)
export const get2022 = async () => fetchMoviesByYear(2022)
export const get2021 = async () => fetchMoviesByYear(2021)
















export const getKdrama = async () => {
  const response = await fetch(`${PREFIX_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko`);
  const data = await response.json();
  console.log(data);
  return data.results; 
};

export const getReality = async () => {
  const response = await fetch(`${PREFIX_URL}/discover/tv?api_key=${API_KEY}&with_genres=10764&language=en-US`);
  const data = await response.json();
  console.log(data);
  return data.results; 
};

 


export const getAllMovies = async () => {
  const allMovies = [];
  let page = 1;

  while (allMovies.length < 100) {
    const response = await fetch(`${PREFIX_URL}/discover/movie?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    allMovies.push(...data.results);

    if (allMovies.length >= 100) {
      break;
    }

    page += 1;
  }

  return allMovies.slice(0, 100);
};


export const getAllTVShows = async () => {
  const allTVShows = [];
  let page = 1;

  while (allTVShows.length < 100) {
    const response = await fetch(`${PREFIX_URL}/discover/tv?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    allTVShows.push(...data.results);

    if (allTVShows.length >= 100) {
      break;
    }

    page += 1;
  }

  return allTVShows.slice(0, 100);
};



export const getUpComming = async () => {
  const allTVShows = [];
  let page = 1;

  while (allTVShows.length < 100) {
    const response = await fetch(`${PREFIX_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    allTVShows.push(...data.results);

    if (allTVShows.length >= 100) {
      break;
    }

    page += 1;
  }

  return allTVShows.slice(0, 100);
};











/*
const API_KEY = "x";
const PREFIX_URL = 'https://api.themoviedb.org/3';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const getTrending = async () => {
  const url = `${PREFIX_URL}/movie/popular?api_key=${API_KEY}`;
  return await fetchData(url);
};

export const getTrendingShows = async () => {
  const url = `${PREFIX_URL}/tv/popular?api_key=${API_KEY}`;
  return await fetchData(url);
};

export const searchMovies = async (query) => {
  const url = `${PREFIX_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
  const data = await fetchData(url);
  return data.filter(movie => movie.title && movie.poster_path && movie.release_date);
};

export const searchShows = async (query) => {
  const url = `${PREFIX_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
  const data = await fetchData(url);
  return data.filter(tvshow => tvshow.name && tvshow.poster_path && tvshow.first_air_date);
};

const fetchMoviesByGenre = async (genreId) => {
  const url = `${PREFIX_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
  const data = await fetchData(url);
  return data.filter(movie => movie.title && movie.poster_path && movie.release_date);
};

export const getAction = async () => fetchMoviesByGenre(28);
export const getAdventure = async () => fetchMoviesByGenre(12);
export const getAnimation = async () => fetchMoviesByGenre(16);
export const getComedy = async () => fetchMoviesByGenre(35);
export const getDocumentary = async () => fetchMoviesByGenre(99);
export const getRomance = async () => fetchMoviesByGenre(10749);
export const getHorror = async () => fetchMoviesByGenre(27);
export const getScienceFiction = async () => fetchMoviesByGenre(878);
export const getThriller = async () => fetchMoviesByGenre(53);
export const getWestern = async () => fetchMoviesByGenre(37);

export const getKDrama = async () => {
  const url = `${PREFIX_URL}/discover/tv?api_key=${API_KEY}&with_keywords=1993`; // K-Drama keyword ID
  return await fetchData(url);
};


*/ 
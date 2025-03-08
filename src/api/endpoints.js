const API_KEY = "52a623f73cded72106e32818f473300d";


const VALID_CATEGORIES = ["popular", "top_rated", "now_playing", "upcoming"];

export function getMoviesCategoriesEndpoint(category, pageNumber = 1, pageSize = 20) {
  if (!VALID_CATEGORIES.includes(category)) {
  
    return null; // Evităm construirea unui URL greșit
  }
    // Construim query string-ul. Va contine api-key-ul, categoria de filme, numarul de elemente returnate si numarul paginii.
    const queryParams = `?api_key=${API_KEY}&page=${pageNumber}&language=en-US&per_page=${pageSize}`;
  
    // Returnam link-ul aferent API-ului TMDb pentru categoriile de filme.
    // Poti inlocui 'movie' cu alte categorii daca este necesar (de exemplu 'tv' pentru seriale).
    return `https://api.themoviedb.org/3/movie/${category}${queryParams}`;
  }
  
  // Functie care returneaza endpoint-ul pentru detalii despre un film.
  export function getMovieDetailsEndpoint(movieId) {
    // Construim query string-ul. Va contine api-key-ul si limba pentru detalii.
    const queryParams = `?api_key=${API_KEY}&language=en-US`;
  
    // Returnam link-ul aferent API-ului TMDb pentru detalii despre film.
    return `https://api.themoviedb.org/3/movie/${movieId}${queryParams}`;
  }

  
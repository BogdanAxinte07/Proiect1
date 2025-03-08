// Initializam state-ul.
export const initialState = {
    movies: [],
  };
  
  export function favoritesReducer(state=initialState, action) {
    switch (action.type) {
      case "ADD_TO_FAVORITES": {
        // Căutăm filmul adăugat în lista de favorite
        const isInList = state.movies?.find((movie) => movie.id === action.payload.id) || false;

  
        // Dacă filmul este deja în state, returnăm state-ul neschimbat
        if (isInList) {
          return state;
        } else {
          // Dacă filmul nu este în listă, îl adăugăm la începutul listei de favorite
          const newState = {
            movies: [action.payload, ...(state.movies || [])],
          };
          
          return newState;
        }
      }
  
      case "REMOVE_FROM_FAVORITES": {
        // Filtrăm filmele din state, eliminându-l pe cel cu ID-ul venit din payload
        const filteredMovies = state.movies.filter((movie) => {

          return movie.id !== action.payload;
        });

        const newState = {
          movies: (state.movies || []).filter((movie) => movie.id !== action.payload),
        };
        return newState;
      }
  
      // Nu uităm să returnăm state-ul pe cazul default
      default: {
        return state;
      }
    }
  }
  
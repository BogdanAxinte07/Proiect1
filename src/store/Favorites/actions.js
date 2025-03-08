import { toast } from "react-toastify";

// Actiunea pentru adăugarea unui film la favorite:
export function addToFavorites(movie) {
  toast.success(`✅ "${movie.title}" a fost adăugat la favorite!`, {
    position: "top-right",
    autoClose: 2000, // Va dispărea după 2 secunde
    hideProgressBar: true,
    closeOnClick: true,
  });

  return {
    type: "ADD_TO_FAVORITES",
    payload: movie,
  };
}

// Actiunea pentru eliminarea unui film din favorite.
export function removeFromFavorites(movieId) {
  toast.info("🧐 Filmul a fost eliminat din favorite!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
  });

  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: movieId,
  };
}

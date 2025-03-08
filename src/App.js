import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieCategory from "./pages/MovieCategory";
import MovieDetails from "./pages/MovieDetails";

import { useReducer, useEffect} from "react";
import { FavoritesContext } from "./store/Favorites/context";
import { initialState, favoritesReducer } from "./store/Favorites/reducer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useLocalStorage } from "./utils/hooks/useLocalStorage";
const init = () => {
  return JSON.parse(localStorage.getItem("favorites"))  || { movies: [] };
};
const router = createBrowserRouter([
  {
   path: "/",
   element: <Home />,
   errorElement: <Page404/>
  },
  {
path: "/favorites",
element: <Favorites/>
  },
  {
    path: "/category/:categoryId",
    element: <MovieCategory/>
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetails/>
          },
])


function App() {
  const [initialLocalStorageState] = useLocalStorage('favorites', initialState);
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialState,
    init
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesState));
  }, [favoritesState]);

  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };
  return (
    <div className="App">
      {/* Pasam state-ul global si dispatch-ul catre intreaga aplicatie. */}
      <FavoritesContext.Provider value={favoritesContextValue}>
        <ToastContainer 
        position = "top-right"
        autoClose={2000}       
        hideProgressBar={true} 
        newestOnTop={true}    
        closeOnClick={true}
        theme="dark"/>
        {/* Adaugam providerul de rutare, similara cu ce am facut la sedinta 32. */}
        <RouterProvider router={router} />
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;

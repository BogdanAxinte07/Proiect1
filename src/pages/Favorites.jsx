import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { FavoritesContext } from "../store/Favorites/context";
import MovieCardList from "../components/MovieCardList";


function Favorites(){
    const { favoritesState } = useContext(FavoritesContext);
    
    const  movies  = favoritesState?.movies || [];
    return(
        <Layout>
            <Container className="my-5">
                <h1 className="mb-5 pt-3 text-light">Filmele favorite</h1>
                {movies.length === 0 ?(
                    <p className="text-light">Momentan nu ai filme favorite!</p>
                ) : (
                    <MovieCardList movieList={movies}/>
                )}
                
            </Container>

        </Layout>
    )
}

export default Favorites;

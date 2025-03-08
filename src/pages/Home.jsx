import Layout from "../components/Layout";
import Container  from "react-bootstrap/Container";
import {useFetch} from "../utils/hooks/useFetch";
import { getMoviesCategoriesEndpoint } from "../api/endpoints";
import MovieCardList from "../components/MovieCardList";
import { getMovieList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home(){
    const movieEndpoint = getMoviesCategoriesEndpoint("popular", 1, 8);
    

    const movieData = useFetch(movieEndpoint)
    

//adaptam datele de la server
const adaptedMovieData = getMovieList(movieData)


return(
    <Layout>
        {/* filme */}
        <section className="movie text-light">
            <Container>
                <h1 className="text-light">Filme</h1>
                {/* adisam filmele */}
                <MovieCardList movieList={adaptedMovieData} />


                <p>Vezi toate filmele in sectiunea <Link to="/category/popular">Filme</Link></p>
            </Container>
        </section>

        <section className="favorites">
            <Container>
                <h1 className="text-light">Favorite</h1>
            </Container>
        </section>
    </Layout>
);



}

export default Home;
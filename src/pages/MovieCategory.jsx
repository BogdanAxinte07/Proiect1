import { useParams, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import  Container  from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getMoviesCategoriesEndpoint } from "../api/endpoints";
import { getMovieList } from "../api/adaptors";
import MovieCardList from "../components/MovieCardList";
import  Pagination  from "../components/Pagination";

function MovieCategory(){
    const { categoryId} = useParams();
    //extragem querry(search)
    let [queryParams] = useSearchParams()
    let currentPage = queryParams.get("page");
    if (!currentPage){
        currentPage = 1;
    }

    const movieCategoryEndpoint = getMoviesCategoriesEndpoint(categoryId, currentPage);
    const movie = useFetch (movieCategoryEndpoint);
    //asaptam datele
    const adaptedMovieList = movie?.results ? getMovieList(movie) : [];
    let title = ""
        switch (categoryId) {
            case "popular":
                title = "Filme ";
                break;
            default:
                break;     
    }
   

    return(
        <Layout>
            <Container>
                <h1>{title}</h1>
                <MovieCardList movieList ={adaptedMovieList}/>
                {/* afisam paginatia */}
                <Pagination active={currentPage} baseUrl={`/category/${categoryId}`} />
            </Container>
        </Layout>
    )
}

export default MovieCategory;
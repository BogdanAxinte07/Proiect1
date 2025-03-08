import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "./MovieCard";


function MovieCardList(props) {
    const { movieList } = props;


    return (
        // Folosim grid-ul bootstrap pentru asezarea in pagina.
        <Container>
          <Row>
            {/* Mapam prin lista de stiri, iar pentru fiecare stire, afisam un card. */}
            {movieList.map((movie) => {
              return (
                <Col xs={12} md={6} lg={4} className="mb-4" key={movie.id}>
                  {/* Atentie la denumirile cheilor din obiectul news si la denumirile prop-urilor lui NewsCard! */}
                  <MovieCard
                  movieId={movie.id}
                    imgSrc={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                    hasCloseButton={movie.hasCloseButton}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      );
    }
    
    export default MovieCardList;
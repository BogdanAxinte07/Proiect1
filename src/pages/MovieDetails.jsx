import { useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useFetch } from "../utils/hooks/useFetch";
import { getMovieDetailsEndpoint } from "../api/endpoints";
import { getMovieDetails } from "../api/adaptors";
import { FavoritesContext } from "../store/Favorites/context";
import { addToFavorites } from "../store/Favorites/actions";
import "./MovieDetails.css";

function MovieDetails() {
  const { favoritesDispatch } = useContext(FavoritesContext);
  let { movieId } = useParams();
  movieId = decodeURIComponent(movieId);

  // Obținem endpoint-ul pentru film
  const movieDetailsEndpoint = getMovieDetailsEndpoint(movieId);

  // Cerem datele de la server
  const movieDetails = useFetch(movieDetailsEndpoint);
  console.log("Movie Details API Response:", movieDetails);

  // 🔹 Dacă API-ul nu a returnat datele încă, afișăm un mesaj de încărcare
  if (!movieDetails) {
    return (
      <Layout>
        <Container>
          <h1>Se încarcă...</h1>
          <p className="text-center">Se încarcă detaliile filmului...</p>
        </Container>
      </Layout>
    );
  }

  // 🔹 Verificăm dacă `movieDetails` conține date valide înainte de a le adapta
  const adaptedMovieDetails = getMovieDetails(movieDetails)

  // 🔹 Dacă `adaptedMovieDetails` este `null`, afișăm o eroare în UI
  if (!adaptedMovieDetails) {
    return (
      <Layout>
        <Container>
          <h1>Eroare</h1>
          <p>Filmul nu a fost găsit sau nu există.</p>
        </Container>
      </Layout>
    );
  }

  // Extragem datele filmului
  const { title, overview, poster_path, release_date, runtime, vote_average } =
    adaptedMovieDetails;

  function handleAddToFavorites(movie) {
    const actionResult = addToFavorites(movie);
    favoritesDispatch(actionResult);
  }

  return (
    <Layout>
      <Container className="MovieDetails my-5">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-4">{title}</h1>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                className="img-fluid rounded shadow mb-4"
              />
            )}
            <p><strong>Descriere:</strong> {overview}</p>
            <p><strong>Data lansării:</strong> {release_date}</p>
            <p><strong>Durată:</strong> {runtime} minute</p>
            <p><strong>Scor:</strong> {vote_average}/10</p>
            <div>
            <Button
              onClick={() =>
                handleAddToFavorites({
                  id: movieId,
                  poster_path,
                  title,
                  overview,
                  hasCloseButton: true,
                })
              }
            >
              Adaugă la favorite
            </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default MovieDetails;

import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { removeFromFavorites } from "../store/Favorites/actions";
import { FavoritesContext } from "../store/Favorites/context";
import "./MovieCard.css";

function MovieCard(props) {
  // Extragem dispatch-ul pentru modificarea listei de favorite
  const { favoritesDispatch } = useContext(FavoritesContext);
  
  // Extragem prop-urile componentei
  const { movieId, imgSrc, title, overview, hasCloseButton } = props;

  function handleRemoveFromFavorites(id) {
    // Apelăm acțiunea de eliminare de la favorite
    const actionResult = removeFromFavorites(id);
    favoritesDispatch(actionResult);
  }
  

const imageURL = imgSrc
? `https://image.tmdb.org/t/p/w500${imgSrc}`
: "https://placehold.co/500x750?text=No+Image";
  return (
    <Card className="MovieCard h-100 d-flex flex-column justify-content-between align-items-center">
      {/* Link către pagina detaliilor filmului */}
      <Link to={`/movie/${encodeURIComponent(movieId)}`}>
        <Card.Img
          variant="top"
          src={imageURL}
          alt={title}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview.length > 100 ? overview.substring(0, 100) + "..." : overview}</Card.Text>
        </Card.Body>
      </Link>
      
      {/* Dacă avem buton de eliminare de la favorite, îl afișăm */}
      {hasCloseButton && (
        <Button
          variant="light"
          onClick={() => handleRemoveFromFavorites(movieId)}
        >
          <span className="material-icons text-dark">close</span>
        </Button>
      )}
    </Card>
  );
}

export default MovieCard;

import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {

    

        return (
        <div>
            <img className="webmovie-movie-card-image" src={movie.image} alt={movie.titulo} />
            <div className="webmovie-card-bottom-container">
                <h3>{movie.titulo}</h3>
                <MovieScore count={movie.count} score={movie.score}/>


                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary webmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>

    );
}

export default MovieCard;
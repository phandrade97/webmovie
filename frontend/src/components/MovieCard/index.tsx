import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {

        const movie = {
            id: 1,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/36eh6VZ8fFjv7bD5Xa1vO2CvzNN.jpg",
            title: "Twisters",
            count: 1,
            score: 3.5
    
        };

        return (
        <div>
            <img className="webmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="webmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />


                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary webmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>

    );
}

export default MovieCard;
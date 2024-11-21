import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import MovieScore from 'components/MovieScore';
import './styles.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="webmovie-card">
      <img className="webmovie-movie-card-image" src={movie.image} alt={movie.titulo} />
      <div className="webmovie-card-bottom-container">
        <h3>{movie.titulo}</h3>
        <MovieScore count={movie.count} score={movie.score} />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary webmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
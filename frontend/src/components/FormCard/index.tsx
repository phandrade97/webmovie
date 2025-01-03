import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import './styles.css';
import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'utils/request';
import { validateEmail } from 'utils/validate';

interface FormCardProps {
  movieId: string;
}

function FormCard({ movieId }: FormCardProps) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (!validateEmail(email)) {
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score,
      },
    };

    axios(config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="webmovie-form-container">
      <img className="webmovie-movie-card-image" src={movie?.image} alt={movie?.titulo} />
      <div className="webmovie-card-bottom-container">
        <h3>{movie?.titulo}</h3>
        <form className="webmovie-form" onSubmit={handleSubmit}>
          <div className="form-group webmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group webmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="webmovie-form-btn-container">
            <button type="submit" className="btn btn-primary webmovie-btn">Salvar</button>
            <Link to="/">
              <button className="btn btn-primary webmovie-btn mt-2">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCard;
import { Link } from 'react-router-dom';
import './styles.css';

function Form() {

    const movie = {
        id: 1,
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/vb4T4VSJ38XdFI9RYS2QB6CCJmd.jpg",
        title: "Twisters",
        count: 1,
        score: 3.5

    };


    return (
        <div className="webmovie-form-container">
            <img className="webmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="webmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="webmovie-form">
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

export default Form;
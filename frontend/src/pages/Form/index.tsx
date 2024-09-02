import './styles.css';

function Form() {

    const movie = {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3O_pOj4H4yL1vu0PwVoQFlIX4D5lB46SKHQ&s",
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
                      </div>
                        </form>
                        <button className="btn btn-primary webmovie-btn mt-3">Cancelar</button>
                    </div >
    </div >
    );
}

export default Form;
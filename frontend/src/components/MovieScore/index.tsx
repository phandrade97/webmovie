import MovieStar from "components/MovieStar";
import './styles.css';


type Props = {
    score: number;
    count: number;
  }

function MovieScore ({ score, count}  : Props){

    return(
        
        <div className="webmovie-score-container">
        	<p className="webmovie-score-value">{score> 0 ? score.toFixed(1) : 'S/N'}</p>
            <MovieStar score={score}/>
            <p className="webmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore;
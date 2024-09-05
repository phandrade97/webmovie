
import './styles.css'
import { ReactComponent as FullStar} from 'assets/img/full-star.svg';
import { ReactComponent as HalfStar} from 'assets/img/half-star.svg';
import { ReactComponent as EmptyStar} from 'assets/img/empty-star.svg';


function MovieStar() {
        return(
            <div className="webmovie-star-container">
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar  />
            </div>
        )

}

export default MovieStar;
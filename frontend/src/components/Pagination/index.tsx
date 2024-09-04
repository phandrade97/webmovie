
import { ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination(){
    return (

        <div className="webmovie-pagination-container">
            <div className="webmovie-pagination-box">
            < button className="webmovie-pagination-button" disabled={true}  >
                <Arrow />
            </button>
            <p>{`${1} de ${3}`}</p>
            <button className="webmovie-pagination-button" disabled={false} >
                <Arrow className="webmovie-flip-horizontal" />
            </button>
            </div>
        </div>
    

    );

}

export default Pagination;
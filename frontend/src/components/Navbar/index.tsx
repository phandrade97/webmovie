import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';
function Navbar() {

    return (<header>
        <nav className="container">
            <div className="webmovie-nav-content">
                <h1>Webmovie</h1>
                <a href="https://github.com/phandrade97">
                    <div className='webmovie-contact-container'>
                        <GithubIcon />
                        <p className="webmovie-contact-link"> /PedroAndrade</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;
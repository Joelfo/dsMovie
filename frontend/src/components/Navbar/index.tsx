import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Joelfo">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <a className="dsmovie-contact-link">/devsuperior</a>
                        </div>

                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
import logo from '../../assets/img/logo.svg'
import './Styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/baltazarbarbosa/">@baltazarbarbosa</a>
                </p>
            </div>
        </header>

    )
}

export default Header
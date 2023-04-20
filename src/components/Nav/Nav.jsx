//Déclaration des routes
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Nav.css";

function Banner() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" className="banner-logo"></img>

      <nav className="navbar">
        <Link className="link-menu" to="/">
          Accueil
        </Link>
        <Link className="link-menu" to="/about">
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Banner;

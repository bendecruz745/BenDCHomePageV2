import "../css/NavBar.css";
import { Link } from "react-router-dom";
import menuIco from "../img/menuico.png";

function NavBar() {
  const handleNavBurger = () => {
    console.log("lmao navburger");
  };
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-brand-container">
          <Link to="/" className="navbar-link-brand">
            <h1 className="navbar-brand-text">Ben DC</h1>
          </Link>
        </div>
        <div className="navbar-link-container">
          <Link to="/Projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/About" className="navbar-link navbar-link-left-margin">
            About
          </Link>
          <div className="navbar-burger-container">
            <img
              src={menuIco}
              alt=""
              className="navbar-burger-menu-button"
              onClick={handleNavBurger}
            />
            <div className="navbar-burger-links-container">
              <Link to="/Projects" className="navbar-burger-link">
                Projects
              </Link>
              <Link
                to="/About"
                className="navbar-burger-link navbar-link-left-margin"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

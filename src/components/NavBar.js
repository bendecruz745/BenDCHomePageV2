import "../css/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
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
      </div>
    </div>
  );
}

export default NavBar;

import "../css/NavBar.css";
import { Link } from "react-router-dom";
import menuIco from "../img/menuico.png";
import { useState, useEffect, useRef } from "react";

function useCheckOutsideClick(ref, setDisplayMenu) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDisplayMenu("none");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setDisplayMenu]);
}

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState("none");
  const menuRef = useRef(null);

  useCheckOutsideClick(menuRef, setDisplayMenu);

  const handleBurgerClick = (event) => {
    if (event.target.className === "navbar-burger-menu-button") {
      setDisplayMenu("block");
    } else {
      setDisplayMenu("none");
    }
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
          <div
            className="navbar-burger-container"
            onClick={handleBurgerClick}
            ref={menuRef}
          >
            <img src={menuIco} alt="" className="navbar-burger-menu-button" />
            <div
              className="navbar-burger-links-container"
              style={{ display: displayMenu }}
            >
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

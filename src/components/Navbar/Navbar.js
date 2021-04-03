import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faStore } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button/Button";
import "./Navbar.scss";
import Routes from "./Routes";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const routesRendered = Routes.map((route, i) => (
    <li key={i}>
      <Link to={route.url} className="nav-links" onClick={closeMobileMenu}>
        {route.name}
      </Link>
    </li>
  ));

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Super Store <FontAwesomeIcon icon={faStore} />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {routesRendered}
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" buttonSize="">
              Sign up
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

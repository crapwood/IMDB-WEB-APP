import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link className="navbar-brand nav-link" to="/">
          Home
        </Link> */}
        <i class="fas fa-film fa-3x"></i>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                <h4>HOME</h4> <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/movies">
                <h4>MOVIES</h4>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/tvshows">
                <h4>TV SHOWS</h4>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/advanced-search">
                <h4>ADVANCED SEARCH</h4>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

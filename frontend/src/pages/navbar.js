import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = (props) => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
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
                HOME <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/movies">
                MOVIES
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/tvshows">
                TV SHOWS
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/advanced-search">
                ADVANCED SEARCH
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

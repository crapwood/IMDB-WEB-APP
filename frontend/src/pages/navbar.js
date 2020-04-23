import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand nav-link" to="/">
          Home
        </Link>
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
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* </section> */}
      {/* <hr /> */}
    </>
  );
};

export default NavBar;

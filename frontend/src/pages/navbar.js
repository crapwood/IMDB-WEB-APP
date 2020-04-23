import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import "./navbar.css";

const NavBar = (props) => {
  return (
    <>
      <section className="nav-container">
        <ButtonGroup aria-label="outlined primary button group">
          <Button variant="outlined">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Button>
          <Button variant="outlined">
            <Link className="nav-link" to="/movies">
              MOVIES
            </Link>
          </Button>
          <Button variant="outlined">
            <Link className="nav-link" to="/tvshows">
              TV SHOWS
            </Link>
          </Button>
          <Button variant="outlined">
            <Link className="nav-link" to="/advanced-search">
              ADVANCED SEARCH
            </Link>
          </Button>
        </ButtonGroup>
      </section>
      {/* <hr /> */}
    </>
  );
};

export default NavBar;

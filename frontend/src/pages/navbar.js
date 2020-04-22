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
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button variant="outlined">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="outlined" color="primary">
            <Link to="/movies">MOVIES</Link>
          </Button>
          <Button variant="outlined" color="secondary">
            <Link to="/tvshows">TV SHOWS</Link>
          </Button>
          <Button>
            <Link to="/advanced-search">ADVANCED SEARCH</Link>
          </Button>
        </ButtonGroup>
      </section>
      <hr />
    </>
  );
};

export default NavBar;

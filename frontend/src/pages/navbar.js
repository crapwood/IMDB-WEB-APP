import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const NavBar = (props) => {
  return (
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/movies">MOVIES</Link>
        </Button>
        <Button>
          <Link to="/tvshows">TV SHOWS</Link>
        </Button>
        <Button>
          <Link to="/advanced-search">ADVANCED SEARCH</Link>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default NavBar;

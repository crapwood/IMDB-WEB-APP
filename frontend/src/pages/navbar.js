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
          <Link to="/">Latest</Link>
        </Button>
        <Button>
          <Link to="/">Example</Link>
        </Button>
        <Button>
          <Link to="/">Options</Link>
        </Button>
        <Button>
          <Link to="/">Sample</Link>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default NavBar;

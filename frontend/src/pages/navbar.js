import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {
  return (
    <>
      <Button>dsdsd</Button>
      <Button variant="contained">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="contained">
        <Link to="/">Latest</Link>
      </Button>
      <Button variant="contained">
        <Link to="/">Example</Link>
      </Button>
      <Button variant="contained">
        <Link to="/">Options</Link>
      </Button>
      <Button variant="contained">
        <Link to="/">Sample</Link>
      </Button>
    </>
  );
};

export default NavBar;

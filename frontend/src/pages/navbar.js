import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
      <Button variant="contained" color="primary">
        <Link to="/">Latest</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/">Example</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/">Options</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/">Sample</Link>
      </Button>
    </>
  );
};

export default NavBar;

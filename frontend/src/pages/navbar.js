import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <Link to="/">Latest</Link>
      <Link to="/">Example</Link>
      <Link to="/">Options</Link>
      <Link to="/">Sample</Link>
    </>
  );
};

export default NavBar;

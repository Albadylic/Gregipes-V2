import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Gregipes</h1>
      <Link to="/">
        <p>Home</p>
      </Link>
    </header>
  );
};

export default Header;

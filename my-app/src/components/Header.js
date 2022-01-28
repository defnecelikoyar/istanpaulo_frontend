import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 id="main-header" className="centered">
        Istanpaulo
      </h1>
      <div id="header-links">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/artworks/new"> Submit</Link></span>
      <span><Link to="/about"> About</Link></span>
      </div>
    </header>
  );
}

export default Header;
// Header = Header

import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Header({
  title,
  logo = "//",
  currentUser,
  setCurrentUser,
}) {
  function login() {
    fetch("http://localhost:3000/login", {
      method: "POST",
    })
      .then((r) => r.json())
      .then(setCurrentUser);
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        <Link to="/">{title}</Link> 
      </h1>
      <nav>
        <NavLink exact className="button" to="/artworks">
          Gallery
        </NavLink>
        <NavLink exact className="button" to="/artworks/new">
          Submit Artwork
        </NavLink>
        {currentUser ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
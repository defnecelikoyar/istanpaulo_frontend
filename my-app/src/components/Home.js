// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import React from "react";


function Home() {
  document.body.style.backgroundColor = "#390606";
  return (
    <div className="home-div">
      <h1 className="home-header"><Link className="home-about" to="/about">istanpaulo</Link></h1>
        <div className="home-links">
          <Link className="home-link" to="/artworks">
            view gallery
          </Link>
          <Link className="home-link" to="/artworks/new">
            submit artwork
          </Link>
        </div>
    </div>
  );
}

export default Home;
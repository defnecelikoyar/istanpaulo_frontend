// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import React from "react";


function Home() {
  return (
    <div>
          <Link className="button" to="/artworks">
            View Gallery
          </Link>
          <Link className="button" to="/artworks/new">
            Submit Artwork
          </Link>
    </div>
  );
}

export default Home;
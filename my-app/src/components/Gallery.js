// Gallery = ProjectList

import React from "react";
// import React, { useState } from "react";
import Artwork from "./Artwork";
import { Link } from 'react-router-dom';

function Gallery({ artworks }) {
  document.body.style.backgroundColor = "#390606";

 const artworkItems = artworks.map((artwork) => {
        return <Artwork key={artwork.id} artwork={artwork} />;
      })
  // const [movementFilter, setMovementFilter] = useState("All");
  // const [artworkSearch, setArtworkSearch] = useState("");

  // const artworkItems = artworks
  //   .filter((artwork) => {
  //     return movementFilter === "All" || artwork.movement === movementFilter;
  //   })
  //   .filter((artwork) => {
  //     return artwork.name.toLowerCase().includes(artworkSearch.toLowerCase());
  //   })
  //   .map((artwork) => {
  //     return <Artwork key={artwork.id} artwork={artwork} />;
  //   });



  return (
    <div>
    <h2 className="artworks-header"><Link className="artworks-link" to="/">artworks</Link></h2>
      {/* <FilterBar
        setPhaseFilter={setPhaseFilter}
        setArtworkSearch={setArtworkSearch}
      /> */}
      <div className="gallery">
      <ul className="cards">{artworkItems}</ul>
      </div>
      <div className="gallery-nav">
        <h3 className="gallery-istanpaulo">
          istanpaulo
        </h3>
        <div className="gallery-links">
          <Link className="gallery-link" to="/">home</Link>
          <Link className="gallery-link" to="/artworks/new">submit</Link>
          <Link className="gallery-link" to="/about">about</Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
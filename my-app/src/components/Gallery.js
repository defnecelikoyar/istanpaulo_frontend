// Gallery = ProjectList

// import React from "react";
import React, { useState } from "react";
import Artwork from "./Artwork";

function Gallery({ artworks }) {

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
      <h2>Artworks</h2>
      {/* <FilterBar
        setPhaseFilter={setPhaseFilter}
        setArtworkSearch={setArtworkSearch}
      /> */}
      <div className="gallery-background">
      <ul className="cards">{artworkItems}</ul>
      </div>
    </div>
  );
}

export default Gallery;
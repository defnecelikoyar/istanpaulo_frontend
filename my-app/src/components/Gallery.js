// Gallery = ProjectList

// import React from "react";
import React, { useState } from "react";
import Artwork from "./Artwork";

function Gallery({ artworks }) {
    // return <div>
    //     hello this is the gallery
    // </div>
  const [phaseFilter, setPhaseFilter] = useState("All");
  const [artworkSearch, setArtworkSearch] = useState("");

  const artworkItems = artworks
    .filter((artwork) => {
      return phaseFilter === "All" || artwork.phase === phaseFilter;
    })
    .filter((artwork) => {
      return artwork.name.toLowerCase().includes(artworkSearch.toLowerCase());
    })
    .map((artwork) => {
      return <Artwork key={artwork.id} artwork={artwork} />;
    });

  return (
    <section>
      <h2>Artworks</h2>

      {/* <FilterBar
        setPhaseFilter={setPhaseFilter}
        setArtworkSearch={setArtworkSearch}
      /> */}

      <ul className="cards">{artworkItems}</ul>
    </section>
  );
}

export default Gallery;
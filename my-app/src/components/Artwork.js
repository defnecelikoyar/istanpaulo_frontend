// Artwork = ProjectItem

import React, { useState } from "react";
// import React from "react";
// 'react-router-dom' Imports
import { Link } from 'react-router-dom';

function Artwork({ artwork }) {
//   // Pull "id" from artwork object

//   // Generate path by interpolating "id" into <Link> path
  const path = `/artworks/${artwork.id}`;

  const [tears, setTears] = useState(0);
  function handleTearClick() {
    setTears(tears + 1);
  }

  const totalTears = () => {
    if (tears > 1) {
      return <span> {tears} people crying. </span>
    } else if (tears === 1) {
      return <span> {tears} person crying. </span>
    } else if (tears === 0) {
      return <span> No one's crying. </span>
    }
  }

  return (
    <div className="cards_item">
      <Link className="see-more" to={path}>
      <img src={artwork.image_url} alt={artwork.title} className="card_image"/>
      </Link>
        <div className="card_header">
          <h4 className="card_title">{artwork.title}</h4>
          <h4 className="card_artist">{artwork.artist}</h4>
        </div>
        <div className="tears">
          <button className="tears-button" onClick={handleTearClick}>
          🥲  This brought a tear to my eye.
          </button>
          <span className="tears-total"> {totalTears()} </span>
        </div>
    </div>
  );
}

export default Artwork;
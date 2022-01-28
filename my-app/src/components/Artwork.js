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
    <ul className="cards_item">
      <div className="card">
        <img src={artwork.image_url} alt={artwork.title} className="card_image"/>
        <button className="tears" onClick={handleTearClick}>
        🥲  This brought a tear to my eye.
        </button>
        <span> {totalTears()} </span>
      </div>

      <div className="card_content">
        <h4 className="card_title">{artwork.title}</h4>
        <Link to={path}>See More</Link>
      </div>

      <div className="card_detail">
        <p>{artwork.era}</p>
      </div>
    </ul>
  );
}

export default Artwork;
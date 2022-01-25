// Artwork = ProjectItem

import React, { useState } from "react";
// import React from "react";
// 'react-router-dom' Imports
import { Link } from 'react-router-dom';

function Artwork({ artwork }) {
    // return <div>
    //     hello this is the artwork component
    // </div>
  const [tears, setTears] = useState(0);

//   // Pull "id" from artwork object
  const { id, image, name, about, movement } = artwork;

//   // Generate path by interpolating "id" into <Link> path
  const path = `/artworks/${id}`;

  function handleTearClick() {
    setTears(tears + 1);
  }

  return (
    <li className="card">
      <div className="project-image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleTearClick}>
        🥲{tears} Tear to my eye.
        </button>
      </div>

      <div className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        <Link to={path}>
          See More
        </Link>
      </div>

      <div className="extra">
        <span className="badge blue">Movement {movement}</span>
      </div>
    </li>
  );
}

export default Artwork;
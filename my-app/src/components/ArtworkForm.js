// ArtworkForm = ProjectForm

import React, { useState } from "react";
import { Link } from 'react-router-dom';

function ArtworkForm({ addArtwork }) {
  document.body.style.backgroundColor = "#D0EABC";
  const [formData, setFormData] = useState({
    "artist": "",
    "title": "",
    "date" : "",
    "imageUrl" : "",
    "description" : ""
  })

    function handleChange(e) {
      setFormData({...formData, [e.target.name]:e.target.value})
    }

  function handleSubmit(event) {
    event.preventDefault();
        // console.log(formData);
        addArtwork(formData)
        // console.log(typeof formData)
      }

  return (
    <div>
      <h3 className="add-artwork">add new artwork</h3>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <div className="form-artist">
          <label className="artist-label" htmlFor="artist">artist</label>
          <input
            className="artist-input"
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </div>
        <div className="form-title">
          <label className="title-label" htmlFor="title">title</label>
          <input
            className="title-input"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-image">
          <label className="image-label" htmlFor="imageUrl">image url</label>
          <input
            className="image-input"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-date">
          <label className="date-label" htmlFor="date">date</label>
          <input
            className="date-input"
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-description">
        <label className="desc-label" htmlFor="description">description</label>
        <textarea
          className="desc-input"
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        </div>
        <button className="submit-artwork" type="submit">submit</button>
      </form>
      <div className="form-nav">
      <Link className="istanpaulo-link" to="/">
        <h3 className="form-istanpaulo">
          istanpaulo
        </h3>
        </Link>
        <div className="form-links">
          <Link className="form-link" to="/artworks">gallery</Link>
          <Link className="form-link" to="/about">about</Link>
        </div>
      </div>
    </div>
  );
}

export default ArtworkForm;
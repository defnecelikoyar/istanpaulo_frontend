// ArtworkForm = ProjectForm

import React, { useState } from "react";

function ArtworkForm({ onAddArtwork }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [movement, setMovement] = useState(1);
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name,
      about,
      movement,
      link,
      image,
    };

    fetch("http://localhost:3000/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newArtwork) => {
        onAddArtwork(newArtwork);
      });
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Artwork</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {name.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a name</p>
        ) : null}

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={(event) => setAbout(event.target.value)}
        />

        <label htmlFor="movement">movement</label>
        <select
          name="movement"
          id="movement"
          value={movement}
          onChange={(event) => setMovement(parseInt(event.target.value))}
        >
          <option value="1">movement 1</option>
          <option value="2">movement 2</option>
          <option value="3">movement 3</option>
          <option value="4">movement 4</option>
          <option value="5">movement 5</option>
        </select>

        <label htmlFor="link">Artwork Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <button type="submit">Add Artwork</button>
      </form>
    </section>
  );
}

export default ArtworkForm;
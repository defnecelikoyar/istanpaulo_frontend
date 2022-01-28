// ArtworkForm = ProjectForm

import React, { useState } from "react";

function ArtworkForm({ addArtwork }) {
  const [formData, setFormData] = useState({
    "artist": "",
    "title": "",
    "date" : "",
    "era" : "",
    "imageUrl" : "",
    "description" : ""
  })

  // function handleOnChange(e) {
  //   console.log(formData)
  // }
  // const [artist, setArtist] = useState("");
  // const [title, setTitle] = useState("");
  // const [era, setEra] = useState(0);
  // const [imageUrl, setImageUrl] = useState("");
  // const [date, setDate] = useState(0);
  // const [description, setDescription] = useState("");

    // const formData = {
    //   artist,
    //   title,
    //   era,
    //   imageUrl,
    //   date,
    //   description
    // };


  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newArtwork) => {
        console.log(newArtwork)
        addArtwork(newArtwork);
      });
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Artwork</h3>
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={(event) => setFormData(event.target.value)}
        />
        {/* {formData.artist.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a name</p>
        ) : null} */}

        <label htmlFor="title">Title</label>
        <textarea
          id="title"
          name="title"
          value={formData.title}
          onChange={(event) => setFormData(event.target.value)}
        />

        <label htmlFor="era">era</label>
        <select
          name="era"
          id="era"
          value={formData.era}
          onChange={(event) => setFormData(parseInt(event.target.value))}
        >
          <option value="1">1910s</option>
          <option value="2">1920s</option>
          <option value="3">1950s</option>
          <option value="4">1960s</option>
          <option value="5">1970s</option>
        </select>

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={(event) => setFormData(event.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          value={formData.date}
          onChange={(event) => setFormData(event.target.value)}
        />
        
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={(event) => setFormData(event.target.value)}
        />

        <button type="submit">Add Artwork</button>
      </form>
    </section>
  );
}

export default ArtworkForm;
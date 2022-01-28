import React, { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import ArtworkForm from "./ArtworkForm";
import Gallery from "./Gallery";
import ArtworkDetail from "./ArtworkDetail";
import { Switch, Route } from 'react-router-dom';


function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/artworks")
      .then((r) => r.json())
      .then(data => setArtworks(data));
  }, []);

  function handleAddArtwork(newArtwork) {
    const newArtworkArray = [newArtwork, ...artworks];
    setArtworks(newArtworkArray);
  }

  return (
    <div>
      <Header />
      <Switch>        
        <Route path="/artworks/new" component={() => <ArtworkForm addArtwork={handleAddArtwork} /> } />
        <Route path="/artworks/:id" component={() => <ArtworkDetail art={artworks} />} />
        <Route path="/artworks" component={() => <Gallery artworks={artworks} /> }   />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
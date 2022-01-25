import React, { useEffect, useState } from "react";
// import React from "react";
import Home from "./Home";
import Header from "./Header";
import ArtworkForm from "./ArtworkForm";
import Gallery from "./Gallery";
import ArtworkDetail from "./ArtworkDetail";
import { Switch, Route } from 'react-router-dom';


function App() {
  // return <div>
  //   {/* <Header /> */}
  //   hello this is the app
  // </div>
  const [artworks, setArtworks] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/artworks")
      .then((r) => r.json())
      .then(setArtworks);
  }, []);

  // function handleDarkModeClick() {
  //   setIsDarkMode(!isDarkMode);
  // }

  function handleAddArtwork(newArtwork) {
    const newArtworkArray = [newArtwork, ...artworks];
    setArtworks(newArtworkArray);
  }

  return (
    <div 
    // className={isDarkMode ? "App" : "App light"}
    >
      <Header
        title="Instapaulo Gallery"
        // isDarkMode={isDarkMode}
        // onDarkModeClick={handleDarkModeClick}
        // currentUser={currentUser}
        // setCurrentUser={setCurrentUser}
      />
      <Switch>        
        <Route path="/artwork/new" component={
          () => <ArtworkForm onAddProject={handleAddArtwork} /> } 
        />

        <Route path="/artwork/:id" component={ArtworkDetail} />
        
        <Route path="/artworks" component={
          () => <Gallery artworks={artworks} /> } 
        />

        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
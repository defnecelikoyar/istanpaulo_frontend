// import React, { useEffect, useState } from "react";
import React from "react";
// import Home from "./Home";
// import Header from "./Header";
// import ArtworkForm from "./ArtworkForm";
// import Gallery from "./Gallery";
// import ArtworkDetail from "./ArtworkDetail";
// import { Switch, Route } from 'react-router-dom';


function App() {
  return <div>
    hello this is the app
  </div>
  // const [projects, setProjects] = useState([]);
  // const [isDarkMode, setIsDarkMode] = useState(true);
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3000/projects")
  //     .then((r) => r.json())
  //     .then(setProjects);
  // }, []);

  // function handleDarkModeClick() {
  //   setIsDarkMode(!isDarkMode);
  // }

  // function handleAddProject(newProject) {
  //   const newProjectArray = [newProject, ...projects];
  //   setProjects(newProjectArray);
  // }

  // return (
  //   <div className={isDarkMode ? "App" : "App light"}>
  //     <Header
  //       title="Science Fair"
  //       isDarkMode={isDarkMode}
  //       onDarkModeClick={handleDarkModeClick}
  //       currentUser={currentUser}
  //       setCurrentUser={setCurrentUser}
  //     />
  //     {/* wouldn't it be nice if these were separate pages? */}
  //     <Switch>        
  //       <Route path="/projects/new" component={
  //         () => <ArtworkForm onAddProject={handleAddProject} /> } 
  //       />

  //       <Route path="/projects/:id" component={ArtworkDetail} />
        
  //       <Route path="/projects" component={
  //         () => <Gallery projects={projects} /> } 
  //       />

  //       <Route path="/" component={Home} />
  //     </Switch>
  //   </div>
  // );
}

export default App;
import React from "react";
// import React, { useState } from "react";
// import Artwork from "./Artwork";

function Gallery({ projects }) {
    return <div>
        hello this is the gallery
    </div>
//   const [phaseFilter, setPhaseFilter] = useState("All");
// //   const [projectSearch, setProjectSearch] = useState("");

//   const projectItems = projects
//     .filter((project) => {
//       return phaseFilter === "All" || project.phase === phaseFilter;
//     })
//     .filter((project) => {
//       return project.name.toLowerCase().includes(projectSearch.toLowerCase());
//     })
//     .map((project) => {
//       return <Artwork key={project.id} project={project} />;
//     });

//   return (
//     <section>
//       <h2>Projects</h2>

//       <FilterBar
//         setPhaseFilter={setPhaseFilter}
//         setProjectSearch={setProjectSearch}
//       />

//       <ul className="cards">{projectItems}</ul>
//     </section>
//   );
}

export default Gallery;
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    document.body.style.backgroundColor = "#DEBCEA";
    return <div>
        <div className="about">
        istanpaulo online arthouse is a project by <a className="defne-link" href="https://github.com/defnecelikoyar">defne</a> and <a className="felippe-link" href="https://github.com/FePaiva">felippe</a>.
        </div>
        <div className="gallery-nav">
        <Link className="istanpaulo-link" to="/">
        <h3 className="about-istanpaulo">
          istanpaulo
        </h3>
        </Link>
        <div className="about-links">
          <Link className="about-link" to="/artworks">gallery</Link>
          <Link className="about-link" to="/artworks/new">submit</Link>
        </div>
      </div>
    </div>
}

export default About;
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <Link to="/" className="home">Homepage</Link>
        </li>
        <li>
          <Link to="/AboutMe" className="about-me">About Me</Link>
        </li>
        <li>
          <Link to="/AuditionMaterials" className="audition">Audition Materials</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
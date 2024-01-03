// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Dropdown from './Dropdown';

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
        <Dropdown />
      </ul>
    </nav>
  );
}

export default Navbar;
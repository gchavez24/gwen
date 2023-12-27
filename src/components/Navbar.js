// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProfilePicture.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

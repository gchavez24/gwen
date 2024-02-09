// src/components/Homepage.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import Navbar from './Navbar';
import '../css/Homepage.css';

function Homepage() {
  return (
    <div className="home">
      <div className="picture-and-details">
      <Navbar />
        <ProfilePicture />
        <h1 className="homepage">Gwen Vandenhoeck</h1>
        <ProfileDetails />
      </div>
      <section className="recent-news">
        <h2>Recent News</h2>
        <div>
          <ul>
            <li>
              <h3>Nutcracker at St.Louis Ballet, 2023</h3>
            </li>
            <li>
              <h3>Joined St.Louis Ballet, 2023</h3>
            </li>
            <li>
              <h3>Joined Kansas City Ballet, 2022</h3>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
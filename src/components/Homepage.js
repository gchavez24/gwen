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
              <h3>Isaac Era</h3>
              <p>Unexpected rizz, we love, treats her really well</p>
            </li>
            <li>
              <h3>Encounter with Isiah Pacheco</h3>
              <p>"We gotta run it back"</p>
            </li>
            <li>
              <h3>Break-up with Joh</h3>
              <p>He wasn't even cute, cheated, new girl doesn't even want him anymore</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
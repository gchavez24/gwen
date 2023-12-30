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
        <div className="news-item">
          <ul>
            <li>
              <h3>The Nutcracker at St. Louis Ballet</h3>
              <p>Gwen was a mom and marzipan, also the bear</p>
            </li>
            <li>
              <h3>Encounter with Isiah Pacheco</h3>
              <p>Gwen really came out of left field with this one, so random</p>
            </li>
            <li>
              <h3>Break-up with Joh</h3>
              <p>He wasn't even cute, cheated, now he's with her clone</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
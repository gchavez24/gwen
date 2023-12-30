// src/components/AboutMe.js
import React from 'react';
import Navbar from './Navbar';
import '../css/AboutMe.css';

function AboutMe() {
  return (
    <><Navbar />
    <div className="about">
      <img className="photo-1" src="/photo-1.png" alt="Profile" />
      <div className="text-container">
        <h2>About Me</h2>
        <p>
        Gwen, a 21-year-old ballerina from the vibrant borough of Brooklyn, New York, has brought her passion for dance to the heart of St. Louis, Missouri. Currently performing with the St. Louis Ballet, her stage presence is known for captivating audiences with precision and artistry. Gwen's dance journey began in Brooklyn, where she developed and refined her skills at renowned institutions such as Ballet Academy East.<br></br><br></br>

Her commitment to excellence took her to the prestigious Pacific Northwest Ballet PD Program, and she later performed with the Kansas City Ballet. Beyond the spotlight, Gwen is more than a dancer; she aspires to advocate for the well-being of her fellow artists. With dreams of becoming a specialized physical therapist for ballet dancers, Gwen combines her firsthand knowledge of the demands of dance with a compassionate commitment to the health and longevity of the art form. As she continues to showcase her artistry on stage, Gwen stands poised to make enduring contributions to the world of ballet.
        </p>
      </div>
    </div></>
  );
}

export default AboutMe;


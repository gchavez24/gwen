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
        As a student at Ballet Academy East, I performed corps and solo work including Lilac Fairy from Petipa’s Sleeping Beauty and Balanchine’s Elegie. I also gained choreographic experience, creating my own work that was performed by my peers. At Pacific Northwest Ballet, I have performed in Balanchine’s Nutcracker and multiple New Works by PNB company members. While at Kansas City Ballet, I performed in Devon Carney’s Giselle, The Nutcracker, and Cinderella, and Mark Morris' Sandpaper. As well, I had the pleasure of working with Ana Maria Lucaciu on Alexander Eckman's Cacti. With Saint Louis Ballet, I have performed in Gen Horiuchi’s Giselle and The Nutcracker. I am looking forward to our mixed rep in February consisting of Square Dance by Balanchine, In Reel Time by Brian Enos, and St. Louis Blues by Mr. Horiuchi, as well as Sleeping Beauty (Horiuchi) in the spring.               
        </p>
      </div>
    </div></>
  );
}

export default AboutMe;


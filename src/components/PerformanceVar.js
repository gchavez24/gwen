import React from 'react';
import ReactPlayer from 'react-player';
import '../css/PerformanceVar.css';
import Navbar from './Navbar';

function PerformanceVar() {
  return (
    <div>
      <Navbar />
      <div className="player-container">
      <div className="player"><ReactPlayer
        url="/videos/PERF.mp4"
        controls={true}
        width="600px"
        height="600px"
      /></div>
      <ul className="timestops">
        <li>Video Timestops 0:00</li>
        <li>Sandpaper by Mark Morris 0.03</li>
        <li>Pas de Deux from "Der Mond" by Sophie Hod 0:36</li>
        <li>Solo from "Feather" by Gabriel Lorena 2:16</li>
        <li>Emeralds Bracelet Variation by George Balanchine 4:13</li>
        <li>Contemporary Solo Phrase by Yin Yue 7:08</li>
      </ul>
    </div>
    </div>
  );
}

export default PerformanceVar;

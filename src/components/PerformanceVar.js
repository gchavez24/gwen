import React from 'react';
import ReactPlayer from 'react-player';
import '../css/PerformanceVar.css';
import '../css/Navbar.css';
import Dropdown from './Dropdown';
import '../css/Dropdown.css';
import { Link } from 'react-router-dom';


function PerformanceVar () {
    return (
        <><nav>
            <ul className="navbar-list">
                <li>
                    <Link to="/" className="home">Homepage</Link>
                </li>
                <li>
                    <Link to="/AboutMe" className="about-me">About Me</Link>
                </li>
                <Dropdown />
            </ul>
        </nav><div>
                <ReactPlayer
                    url="/videos/perf-footage.m4v"
                    controls={true}
                    width="600px"
                    height="600px" />
                <ul className="timestops">
                    <li>Video Timestops 0:00</li>
                    <li>Sandpaper by Mark Morris 0.03</li>
                    <li>Pas de Deux from "Der Mond" by Sophie Hod 0:36</li>
                    <li>Solo from "Feather" by Gabriel Lorena 2:16</li>
                    <li>Emeralds Bracelet Variation by George Balanchine 4:13</li>
                    <li>Comtemporary Solo Phrase by Yin Yue 7:08</li>
                </ul>
            </div></>
    )
}

export default PerformanceVar;
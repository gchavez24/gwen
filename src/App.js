// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Homepage from './components/Homepage';
import AuditionMaterials from './components/AuditionMaterials';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} className="about"/>
          <Route path="/AuditionMaterials" element={<AuditionMaterials/>} className="audition"/>
          <Route path="/" element={<Homepage />} className="home" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

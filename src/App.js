// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Homepage from './components/Homepage';
import AuditionMaterials from './components/AuditionMaterials';
import PerformanceVar from './components/PerformanceVar';
import ClassFootage from './components/ClassFootage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} className="home" />
          <Route path="/AboutMe" element={<AboutMe />} className="about"/>
          <Route path="/AuditionMaterials" element={<AuditionMaterials/>} className="audition"/>
          <Route path="/AuditionMaterials/ClassFootage" element={<ClassFootage/>} className="class"/>
          <Route path="/AuditionMaterials/PerformanceVar/ClassFootage" className="perf-class"/>
          <Route path="/AuditionMaterials/PerformanceVar" element={<PerformanceVar/>} className="performance"/></Routes>
      </div>
    </Router>
  );
}

export default App;

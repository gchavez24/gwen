import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Homepage from './components/Homepage';
import PerformanceVar from './components/PerformanceVar';
import ClassFootage from './components/ClassFootage';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} className="home" />
          <Route path="/AboutMe" element={<AboutMe />} className="about" />
          <Route path="/PerformanceVar" element={<PerformanceVar className="performance"/>} />
          <Route path="/ClassFootage" element={<ClassFootage />} className="class"/>
          <Route path="/Resume" element={<Resume />} className="resume"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

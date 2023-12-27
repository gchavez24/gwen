// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

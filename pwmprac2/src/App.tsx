import React from 'react';
import './App.css';
import LandingPage from './views/landingPage/landingPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/homePage/homePage';
import LandingPagev2 from './views/landingPage/landingPagev2';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

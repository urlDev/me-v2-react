import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import CustomNav from "./components/customnav";
import Hero from "./components/hero";

function App() {
  return (
    <Router>
      <div className="hero">
        <CustomNav/>
        <Hero/>
      </div>
    </Router>
  );
}

export default App;

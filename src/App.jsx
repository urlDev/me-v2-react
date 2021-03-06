import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CustomNav from './components/customnav';
import Hero from './components/hero';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
	return (
		<Router>
			<div>
			<div className="hero">
				<CustomNav />
				<Hero />
			</div>
			<About />
			<Portfolio />
			<Contact />
			<Footer />
			</div>
			
		</Router>
	);
}

export default App;

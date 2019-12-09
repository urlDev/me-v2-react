import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';

import './hero.css';

class Hero extends Component {
	render() {
		return (
			<div className="header">
				<Container className="content">
					<h3 className="welcome text-center text-white">welcome to</h3>
					<h1 className="me text-center text-white">me<span className="dot">.</span></h1>
				</Container>
				<Image src="assets/mask.png" className="mask" /> 
			</div>
		);
	}
}

export default Hero;

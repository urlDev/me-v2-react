import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './about.css';

class About extends Component {
	render() {
		return (
				<Container id="about">
					<h1 className="about text-left">about me</h1>
					<p className="lorem text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate at earum voluptates
						optio ducimus distinctio placeat, qui harum, necessitatibus autem eveniet ab nulla magnam nemo!
						Nobis ipsum voluptatibus aperiam itaque eius officiis id esse tenetur quis enim similique quod,
						quae ut expedita beatae.
					</p>
				</Container>
		);
	}
}

export default About;

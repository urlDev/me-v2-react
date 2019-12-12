import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,  Row, Col, Button, Form } from 'react-bootstrap';
import Input from "./input";
import './contact.css';

class Contact extends Component {
	render() {
		return (
			<Container className="contactMe" id="contactMe">
				<Row>
					<Col md={4}>
						<h1 className="contact">contact me</h1>
					</Col>
					<Col md={8} className="card">
						<Input/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Contact;

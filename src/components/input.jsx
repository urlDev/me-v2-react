import React from 'react';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import './input.css';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
	apiKey: 'AIzaSyBt6pPqOg_eV87fZOjqwy2Ibl0QhjLihAY',
	authDomain: 'reactcontactform-9f778.firebaseapp.com',
	projectId: 'reactcontactform-9f778'
});

const db = firebase.firestore();

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			message: ''
		};
	}

	

	handleSubmit = (e) => {
		e.preventDefault();

        const createdAt = new Date();
        const messages = db
			.collection('messages')
			.add({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				message: this.state.message,
                createdAt
			})
			.catch((error) => console.log(error));

		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			message: ''
		});

        alert("Your message has been sent!")
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						value={this.state.firstName}
						name="firstName"
						type="text"
						placeholder="First name"
						className="form-control"
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						value={this.state.lastName}
						name="lastName"
						type="text"
						placeholder="Last name"
						className="form-control"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						value={this.state.email}
						name="email"
						type="email"
						placeholder="name@example.com"
						className="form-control"
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Your Message</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						as="textarea"
						rows="4"
						className="form-control"
						value={this.state.message}
						name="message"
						required
					/>
				</Form.Group>

				<Container>
					<Row>
						<Col className="text-center">
							<Button
								variant="outline-light"
								className="btn-lg button2"
								type="submit"
							>
								send
							</Button>
						</Col>
					</Row>
				</Container>
			</Form>
		);
	}
}

export default Input;

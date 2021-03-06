import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './input.css';


// needed for firebase. works this way.
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
			message: '',
            classNames: ""
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const { firstName, lastName, email, message } = this.state;
		const createdAt = new Date();
// creates a collection in firebase called messages. and adds all the inputs and date.
		const messages = db
			.collection('messages')
			.add({
				firstName: firstName,
				lastName: lastName,
				email: email,
				message: message,
				createdAt
			})
			.catch((error) => console.log(error));
// sets the states back to empty, initial state
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			message: ''
		});

		alert('Your message has been sent!');
	};

// gets the value of inputs
	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });

        
	};
// with onclick of button, checks if states are empty, if they are empty then adds the classname of shake(which ive put in css)
    handleClick = () => {
        const { classNames, firstName, email, message } = this.state;
        
        if(firstName === "" && email === "" && message === "") {
            this.setState({classNames: classNames ? "" : "shake"});
        }
    }

// sets the state back to empty after animation ends.
	animationEnd = () => {
		this.setState({
			classNames: "",
		})
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Fade bottom>
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
				</Fade>
				<Fade bottom delay={400}>
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
				</Fade>
				<Fade bottom delay={500}>
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
				</Fade>
				<Fade bottom delay={600}>
					<Form.Group>
						<Form.Label>Your Message</Form.Label>
						<Form.Control
							onChange={this.handleChange}
							as="textarea"
							rows="4"
							className={`form-control`}
							value={this.state.message}
							name="message"
							required
						/>
					</Form.Group>
				</Fade>
				<Container>
					<Row>
						<Col className="text-center">
							<Fade bottom delay={750}>
								<Button onClick={this.handleClick} onAnimationEnd={this.animationEnd} variant="outline-light" className={`${this.state.classNames} btn-lg button2`} type="submit">
									send
								</Button>
							</Fade>
						</Col>
					</Row>
				</Container>
			</Form>
		);
	}
}

export default Input;

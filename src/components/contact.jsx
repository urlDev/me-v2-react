import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,  Row, Col, Button, Form } from 'react-bootstrap';
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
						<Form>
							<Form.Group>
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" placeholder="First name" className="form-control"/>
							</Form.Group>
                            <Form.Group>
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" placeholder="Last name" className="form-control"/>
							</Form.Group>
                            <Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" className="form-control"/>
							</Form.Group>
                            <Form.Group>
								<Form.Label>Your Message</Form.Label>
								<Form.Control as="textarea" rows="4" className="form-control"/>
							</Form.Group>

                            <Container>
                                <Row>
                                    <Col className="text-center">
                                        <Button variant="outline-light" className="btn-lg button2">send</Button>
                                    </Col>
                                </Row>
                            </Container>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Contact;

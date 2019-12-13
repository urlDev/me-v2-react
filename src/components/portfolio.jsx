import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col, Button, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './portfolio.css';

class Portfolio extends Component {
	render() {
		return (
			<div id="portfolio">
				<Image src="./assets/portfolioTop.png" alt="" className="portfolioTop" />

				<Container>
					<h1 className="text-center display-1 portfolioTitle">portfolio</h1>
					<Row className="portfolioWrap">
						<Col xs={12} md={4} className="portfolio">
							<Container>
								<Fade top duration={1000}>
									<Row>
										<Col md={6} className="numbers">
											<h1 className="firstText text-center">01</h1>
										</Col>
										<Col md={6} className="card cardFirst">
											<Image src="./assets/Mask Group 1.png" className="card-img-top" alt="..." />
											<Card.Body className="cardBody">
												<Card.Text className="cardText text-center">
													Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
													vero!
												</Card.Text>
											</Card.Body>
										</Col>
									</Row>
								</Fade>
							</Container>
						</Col>
						<Col xs={12} md={4} className="portfolio">
							<Container>
								<Fade top delay={200} duration={1000}>
									<Row>
										<Col md={6} className="numbers ">
											<h1 className="firstText text-center">02</h1>
										</Col>
										<Col md={6} className="card cardFirst">
											<Image src="./assets/Mask Group 2.png" className="card-img-top" alt="..." />
											<Card.Body className="cardBody">
												<Card.Text className="cardText text-center">
													Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
													vero!
												</Card.Text>
											</Card.Body>
										</Col>
									</Row>
								</Fade>
							</Container>
						</Col>
						<Col xs={12} md={4} className="portfolio">
							<Container>
								<Fade top delay={400} duration={1000}>
									<Row>
										<Col md={6} className="numbers ">
											<h1 className="firstText text-center">03</h1>
										</Col>
										<Col md={6} className="card cardFirst">
											<Image src="./assets/Mask Group 3.png" className="card-img-top" alt="..." />
											<Card.Body className="cardBody">
												<Card.Text className="cardText text-center">
													Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
													vero!
												</Card.Text>
											</Card.Body>
										</Col>
									</Row>
								</Fade>
							</Container>
						</Col>
					</Row>
					<Container>
						<Row>
							<Col className="text-center">
								<Button variant="outline-light" className=" btn-lg button">
									view all
								</Button>
							</Col>
						</Row>
					</Container>
				</Container>

				<Image src="./assets/portfolioBottom.png" alt="" className="portfolioBottom" />
			</div>
		);
	}
}

export default Portfolio;

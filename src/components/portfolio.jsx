import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col, Button, Card  } from 'react-bootstrap';

import './portfolio.css';

class Portfolio extends Component {
	render() {
		return (
            <div className="portfolioAll">
                <Image src="./assets/portfolioTop.png" alt="" className="portfolioTop"/>
			
                <Container>
                    <h1 className="text-center display-1 portfolioTitle">portfolio</h1>
                    <Row className="portfolioWrap">
                        <Col xs={12} md={4} className="portfolio">
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <h1 className="firstText text-center">01</h1>
                                    </Col>
                                    <Col md={6} className="card cardFirst">
                                        <Image src="./assets/Mask Group 1.png" className="card-img-top" alt="..."/>
                                        <Card.Body className="cardBody">
                                            <Card.Text className="cardText text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, vero!</Card.Text>
                                        </Card.Body>    
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={12} md={4} className="portfolio">
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <h1 className="firstText text-center">02</h1>
                                    </Col>
                                    <Col md={6} className="card cardFirst">
                                        <Image src="./assets/Mask Group 2.png" className="card-img-top" alt="..."/>
                                        <Card.Body className="cardBody">
                                            <Card.Text className="cardText text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, vero!</Card.Text>
                                        </Card.Body>    
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={12} md={4} className="portfolio">
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <h1 className="firstText text-center">03</h1>
                                    </Col>
                                    <Col md={6} className="card cardFirst">
                                        <Image src="./assets/Mask Group 3.png" className="card-img-top" alt="..."/>
                                        <Card.Body className="cardBody">
                                            <Card.Text className="cardText text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, vero!</Card.Text>
                                        </Card.Body>    
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <Button variant="outline-light" className=" btn-lg button">view all</Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>   
            {/* <div className="row portfolioWrap">
                <div className="col-xs-12 col-md-4 portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text">
                                <h1 className="firstText text-center">01</h1>
                            </div>
                            <div className="col-md-6 card cardFirst">
                                <img src="./assets/Mask Group 1.png" className="card-img-top" alt="...">
                                <div className="card-body cardBody">
                                    <p className="card-text cardText text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, vero!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4 portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text">
                                <h1 className="firstText text-center">02</h1>
                            </div>
                            <div className="col-md-6 card cardFirst">
                                <img src="./assets/Mask Group 2.png" className="card-img-top" alt="...">
                                <div className="card-body cardBody">
                                    <p className="card-text cardText text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, vero!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4 portfolio">
                    <div className="container">
                        <Row className="row">
                            <Col className="col-md-6 text">
                                <h1 className="firstText text-center">03</h1>
                            </Col>
                            <div className="col-md-6 card cardFirst">
                                <img src="./assets/Mask Group 3.png" className="card-img-top" alt="...">
                                <div className="card-body cardBody">
                                    <p className="card-text cardText text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, vero!</p>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
            <Container className="container">
                <Row className="row">
                    <Col className="col text-center">
                        <Button className="btn btn-outline-light btn-lg button">view all</Button>
                    </Col>
                </Row>
            </Container>
        */}

            <Image src="./assets/portfolioBottom.png" alt="" className="portfolioBottom"/>
        </div>
		);
	}
}

export default Portfolio;

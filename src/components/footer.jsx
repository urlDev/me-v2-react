import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from './Logo.svg';
import './footer.css';

class Footer extends Component {
	render() {
		let n = new Date().getFullYear();
		return (
			<div id="footer">
				<div className="footerTopDiv">
					<Image src="./assets/footerTop.png" className="footerTop" />
				</div>
				<div className="footerBottomDiv">
					{/* <Image src="./assets/footerBottom.png" alt="" className="footerBottom" /> */}
					<Container className="footerContainer">
						<Row>
							<Col className="footerBox">
								<Link href="/" className="footerBanner">
									<Logo />
								</Link>
								<h1 className="footerMail">hello@url.com</h1>
							</Col>
							<Col className="footerBox footerNav">
								<Nav>
									<Nav.Item>
										<Nav.Link href="#about">about</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link href="#portfolio">portfolio</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link href="#contactMe">contact me</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col className="footerBox footerSocial">
								<Link>
									<Image src="./assets/Instagram.svg" className="footerImg" />
								</Link>
								<Link>
									<Image src="./assets/Twitter.svg" className="footerImg" />
								</Link>
							</Col>
						</Row>
						<hr />
						<p className="copyright text-center">©{n}</p>
					</Container>
				</div>
			</div>
		);
	}
}

export default Footer;

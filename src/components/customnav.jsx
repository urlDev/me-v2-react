import React, { Component } from 'react';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "./Logo.svg";
import './customnav.css';

class CustomNav extends Component {
	render() {
		return (
			
				<Navbar default collapseOnSelect variant="dark" expand="lg" className="flex-column" >
					<Navbar.Brand href="/">{/* <Link to="/">Me</Link> */}<Logo/></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"><i class="fas fa-bars"></i></Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto flex-column">
							<Nav.Link eventKey={1} componentClass={Link} data-text="about" href="#about" className="links">
								about
							</Nav.Link>
							<Nav.Link eventKey={2} componentClass={Link} href="#portfolio" className="links">
								portfolio
							</Nav.Link>
							<Nav.Link eventKey={3} componentClass={Link} href="#contactMe" className="links">
								contact me
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			
		);
	}
}

export default CustomNav;

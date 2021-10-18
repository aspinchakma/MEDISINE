import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Headder.css'

const Header = () => {
    return (
        <div className="navbar-for-main">
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home"><img src="https://i.ibb.co/25Z49VP/Logo13.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={NavLink} to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg></Nav.Link>
                            <Navbar.Text className="me-2">
                                Hello: <span>Mark Otto</span>
                            </Navbar.Text>
                        </Nav>
                        <NavLink to="signUp"><button className="common-button me-2">Sign Up</button></NavLink>
                        <button className="common-button">Sign In</button>
                        <button className="common-button">Log out</button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../utilities/hooks/useAuth/useAuth';
import useFirebase from '../../utilities/hooks/useFirebase/useFirebase';
import './Headder.css'

const Header = () => {
    console.log(useAuth())
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                            <Navbar.Text className="me-2">
                                Hello: <span>Mark Otto</span>
                            </Navbar.Text>
                        </Nav>
                        <button className="common-button me-2">Sign Up</button>
                        <button className="common-button">Sign In</button>
                        <button className="common-button">Log out</button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
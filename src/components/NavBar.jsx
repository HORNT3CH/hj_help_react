import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">High Jump Instructions</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Quik View" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">By Location</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">By LP</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">By Item</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Inventory " id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">By Location</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">By LP</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Increment Item</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar
import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const ResponsiveNavbar = (): React.ReactElement => {
    return (
        <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href="/">Rönnas svensexa</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Text1</Nav.Link>
                        <Nav.Link href="#link">Text2</Nav.Link>
                        <NavDropdown title="Text3" id="nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ResponsiveNavbar;

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <Container fluid className="p-0">
        <Row>
          <Col>
            <Navbar sticky='top'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Container fluid>
                    <Row>
                      <Col className="d-none d-sm-block">
                        <Nav className="linksNav flex-row-reverse">
                          <Nav.Link href="">Contactame</Nav.Link>
                          <Nav.Link href="">Proyectos</Nav.Link>
                          <Nav.Link href="">Sobre mi</Nav.Link>
                          <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                        </Nav>
                      </Col>
                      <Col className="d-block d-sm-none">
                        <NavDropdown title="Menu" id="dropdownMenu basic-nav-dropdown">
                          <NavDropdown.Item href="http://localhost:3000/">Home</NavDropdown.Item>
                          <NavDropdown.Item href="http://localhost:3000/">Sobre mi</NavDropdown.Item>
                          <NavDropdown.Item href="http://localhost:3000/">Proyectos</NavDropdown.Item>
                          <NavDropdown.Item href="http://localhost:3000/">Contactame</NavDropdown.Item>
                        </NavDropdown>
                      </Col>
                    </Row>
                  </Container>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header

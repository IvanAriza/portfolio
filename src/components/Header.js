import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div id="Header">
      <Container fluid className="p-0 position-absolute">
        <Row>
          <Col>
            <Navbar sticky='top'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Container fluid>
                    <Row>
                      <Col className="d-none d-sm-block">
                        <Nav className="linksNav flex-row-reverse">
                          {/* Se a importado y añadido la etiqueta Link para poder enviar a las distintas url de la pagina,
                          Ahora mismo esto es poner un a dentro de un a, devuelve un error en la consola pero funciona, mirar si da tiempo como solucionarlo  */}
                          <Nav.Link><Link to="/contacto">Contactame</Link></Nav.Link>
                          <Nav.Link><Link to="/proyectos">Proyectos</Link></Nav.Link>
                          <Nav.Link><Link to="/sobre_mi">Sobre mi</Link></Nav.Link>
                          <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        </Nav>
                      </Col>
                      <Col className="d-block d-sm-none">
                        <NavDropdown title="Menu" id="dropdownMenu basic-nav-dropdown">
                          <NavDropdown.Item><Link to="/">Home</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to="/sobre_mi">Sobre mi</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to="/proyectos">Proyectos</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to="/contacto">Contactame</Link></NavDropdown.Item>
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

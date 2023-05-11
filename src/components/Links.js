import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Links() {

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const [hoveredEmail, setHoveredEmail] = useState(false);
    const toggleHoverEmail = () => setHoveredEmail(!hoveredEmail);

    const [hoveredDescarga, setHoveredDescarga] = useState(false);
    const toggleHoverDescarga = () => setHoveredDescarga(!hoveredDescarga);

      return (
        <div id="socialLinks">
        <Container fluid>
          <Row>
              <Col className='navigation d-flex justify-content-center'>
                  <ul className='d-flex'>
                    <li className={`list mx-3 ${hovered ? 'active' : ''}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                      <a href='https://www.linkedin.com/in/ivan-ariza-huertas-94346b263/' target='_blank' className='d-flex justify-content-center align-items-center flex-column'>
                        <span className='icon'><img src={require('../img/logosLinks/linkedin.png')}></img></span>
                        <span className='text'>Linkedin</span>
                      </a>
                    </li>
                    <li className={`list mx-3 ${hoveredEmail ? 'active' : ''}`} onMouseEnter={toggleHoverEmail} onMouseLeave={toggleHoverEmail}>
                      <a href='mailto:ivanariza55@gmail.com' className='d-flex justify-content-center align-items-center flex-column'>
                        <span className='icon'><img src={require('../img/logosLinks/email.png')}></img></span>
                        <span className='text'>Email</span>
                      </a>
                    </li>
                    <li className={`list mx-3 ${hoveredDescarga ? 'active' : ''}`} onMouseEnter={toggleHoverDescarga} onMouseLeave={toggleHoverDescarga}>
                      <Link to="/assets/Curriculum.pdf" target="_blank" download className='d-flex justify-content-center align-items-center flex-column'>
                        <span className='icon'><img src={require('../img/logosLinks/descarga.png')}></img></span>
                        <span className='text'>Curriculum</span>
                      </Link>
                    </li>
                    <div className='indicator'></div>
                  </ul>
              </Col>
          </Row>
        </Container>
      </div>
    )
  } 

export default Links
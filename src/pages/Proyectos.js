import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Proyectos = () => {
  return (
    <div>
      <Container fluid className='px-0'>
        {/* Banner home */}
        <Row className='mx-0 vh-100 backgroundHome'>
          <Col sm={6} className='d-none d-sm-flex align-items-center justify-content-center'>
            <h1 className='text-center display-3'>Ivan Ariza Huertas<br/>Proyectos</h1>
          </Col>
        </Row>
        <Row className='mx-0 vh-40 d-flex d-sm-none'>
          <Col sm={12} className='d-flex align-items-center justify-content-center'>
            <h1 className='text-center display-2'>Ivan Ariza Huertas<br/>Proyectos</h1>
          </Col>
        </Row>
        <Row className='mx-3 my-3 justify-content-center'>
          <Col lg={4} className='d-lg-none mb-3 d-flex justify-content-center'>
            <img src={require('../img/ttrchileLogo.png')}></img>
          </Col>
          <Col lg={4} className='d-flex align-items-center'>
            <p className='text-center'>La página <a href='https://ttrchile.cl/'>ttrchile.cl</a> la hice junto a dos socios cuando era autónomo,
              la hicimos con wordpress y elementor, intentamos buscar un diseño simple pero llamativo con muchos colores,
              imagenes y logos para que el usuario no se agobiara con tanta información y fuera fácil guiarse.</p>
          </Col>
          <Col lg={4} className='d-none d-lg-flex justify-content-center'>
            <img src={require('../img/ttrchileLogo.png')}></img>
          </Col>
        </Row>
        <Row className='mx-3 justify-content-center'>
          <Col lg={4} className='d-flex justify-content-center'>
            <img src={require('../img/modballsLogo.png')}></img>
          </Col>
          <Col lg={4} className='d-flex align-items-center'>
            <p className='text-center'>En <a href='https://modballs.com/'>modballs.com</a> me hice cargo yo del proyecto, el diseño el clietne ya lo habia hecho y yo me encargue de darle funcionalidad a la tienda y a los botones mediante llamadas API, desde entrar a la tienda y añadir un producto para que se actualice el precio hasta el propio pago lo hice mediante llamadas api con js y php, tambien utilice jquery para actualizar la informacion en el frontend.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Proyectos

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
            <h1 className='text-center display-3'>Ivan Ariza Huertas<br/>Programador FullStack</h1>
          </Col>
        </Row>
        <Row className='mx-0 vh-40 d-flex d-sm-none'>
          <Col sm={12} className='d-flex align-items-center justify-content-center'>
            <h1 className='text-center display-2'>Ivan Ariza Huertas<br/>Programador FullStack</h1>
          </Col>
        </Row>
        <Row>
          <Col className='proyectos'>
            <h1 className='text-center'>Proyectos</h1>
          </Col>
        </Row>
        <Row className='mx-0 mb-3 vh-100 backgroundTtrchile'></Row>
        <Row>
          <Col xs={12} className='proyectos'>
            <h1 className='text-center'><a href='https://ttrchile.cl/' target='_blank'>ttrchile</a></h1>
          </Col>
        </Row>
        <Row className='mx-3'>
          <Col md={6}>
            <p className='text-center'>Esta pagina la hice junto a dos compañeros cuando era autonomo junto a dos compañeros socios, utilizamos wordpress para crear y administrar la propia pagina en si y hicimos el diseños con elementor.</p>
          </Col>
          <Col md={6}>
            <p className='text-center'>Hicimos un diseño sencillo con muchos colores, imagenes y iconos para atraer la atencions de los usuarios y no agobiar con informacion.</p>
          </Col>
        </Row>
        <Row className='mx-0 mb-3 vh-100 backgroundModballs'></Row>
        <Row>
          <Col xs={12} className='proyectos'>
            <h1 className='text-center'><a href='https://modballs.com/' target='_blank'>modballs</a></h1>
          </Col>
        </Row>
        <Row className='mx-3'>
          <Col md={6}>
            <p className='text-center'>Esta página también la hice cuando era autónomo pero en este caso yo fui el encargado, es una tienda tambien hecha en wordpress pero todo funcioan mediante llamadas API.</p>
          </Col>
          <Col md={6}>
            <p className='text-center'>En esta pagina no hice el diseño si no que me encargue de darle funcionalidad a la tienda y a los botones mediante llamadas API, desde entrar a la tienda y añadir un producto para que se actualice el precio hasta el propio pago lo hice mediante llamadas api con js y php, tambien utilice jquery para actualizar la informacion en el frontend.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Proyectos

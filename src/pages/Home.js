import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
      <Container fluid className='px-0'>

        {/* Banner home */}
        <Row className='mx-0 vh-100 backgroundHome'>
          <Col sm={6} className='d-none d-sm-flex align-items-center justify-content-center'>
            <h1 className='text-center display-2'>Ivan Ariza Huertas</h1>
          </Col>
        </Row>
        <Row className='mx-0 vh-40 d-flex d-sm-none'>
          <Col sm={12} className='d-flex align-items-center justify-content-center'>
            <h1 className='text-center display-2'>Ivan Ariza Huertas</h1>
          </Col>
        </Row>
        {/* Estudios */}
        <Row className='mx-0 vh-100 backgroundRoca'>
          <Col sm={12} className='px-0 d-flex align-items-center'>
            <div className='bg-dark vw-md-70 vw-xs-90 vw-ms-90 mw-32rem p-md-3 p-xs-1  p-ms-1 d-flex flex-column align-items-center justify-content-center'>
              <h1 className='text-white'>Centro de estudios Roca<br/>2020-2022</h1>
            </div>
          </Col>
          <Col sm={12} className='px-0 d-flex align-items-center'>
            <div className='bg-dark vw-md-60 vw-xs-85 vw-ms-85 mw-30rem p-md-3 p-xs-1 p-ms-1 d-flex flex-column align-items-center justify-content-center'>
              <p className='text-white'>El centro de estudios Roca fue mi primer contacto con la programacion, aprendi las bases y utilice diversos lenguajes como Java, C++, HTML, CSS, XML, Android Studio junto con MYSQL como base de datos.</p>
            </div>
          </Col>
        </Row>
        <Row className='mx-0 vh-100 backgroundStucom'>
          <Col sm={12} className='px-0 d-flex align-items-center'>
            <div className='bg-dark vw-md-70 vw-xs-90 vw-ms-90 mw-32rem p-md-3 p-xs-1  p-ms-1 d-flex flex-column align-items-center justify-content-center'>
              <h1 className='text-white'>Centro de estudios Stucom<br/>2020-2022</h1>
            </div>
          </Col>
          <Col sm={12} className='px-0 d-flex align-items-center'>
            <div className='bg-dark vw-md-60 vw-xs-85 vw-ms-85 mw-30rem p-md-3 p-xs-1 p-ms-1 d-flex flex-column align-items-center justify-content-center'>
              <p className='text-white'>En el centro de estudiso Stucom profundice mas en la programacion orientada a paginas web, aprendi mas sobre js, php, bases de datos y toque algunos frameworks como Angular.</p>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default Home


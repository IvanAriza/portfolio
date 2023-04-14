import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
      <Container fluid className='px-0'>

        {/* Banner home */}
        <Row className='mx-0'>
        <div id="bannerHome" className='px-0'>
          <Col sm={12} id="columnaBannerHome">
              <img className='position-sm-absolute' src="https://via.placeholder.com/700"></img>           
          </Col>
          <Col sm={6} xs={12} className='h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-center display-2'>Ivan Ariza Huertas</h1>
          </Col>
          </div>
        </Row>
      </Container>
  )
}

export default Home


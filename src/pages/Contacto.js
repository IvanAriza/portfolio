import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';

const Contacto = () => {
  $(document).ready(function(){

    //material contact form
    $('.contact-form').find('.form-control').each(function() {
      var targetItem = $(this).parent();
      if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
      });
      }
    })
    $('.contact-form').find('.form-control').focus(function() {
      $(this).parent('.input-block').addClass('focus');
      $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px'
      }, 300);
    })
    $('.contact-form').find('.form-control').blur(function() {
      if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
      }, 300);
      }
    })
    
  });
  return (
    <Container fluid className='px-0'>
        {/* Banner home */}
        <Row className='mx-0 vh-100 backgroundHome'>
          <Col sm={6} className='d-none d-sm-flex align-items-center justify-content-center'>
            <h1 className='text-center display-3'>Ivan Ariza Huertas<br/>Contacto</h1>
          </Col>
        </Row>
        <Row className='mx-0 vh-40 d-flex d-sm-none'>
          <Col sm={12} className='d-flex align-items-center justify-content-center'>
            <h1 className='text-center display-2'>Ivan Ariza Huertas<br/>Contacto</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="section">
              <section className="contact-wrap">
                <form action="" className="contact-form">
                <div className="col-sm-6">
                  <div className="input-block">
                  <label for="">Nombre</label>
                  <input type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block">
                  <label for="">Apellidos</label>
                  <input type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block">
                  <label for="">Email</label>
                  <input type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block">
                  <label for="">Sujeto</label>
                  <input type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block textarea">
                  <label for="">Ponga su mensaje aqui.</label>
                  <textarea rows="3" type="text" className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-sm-12">
                  <button className="square-button">Enviar</button>
                </div>
                </form>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default Contacto

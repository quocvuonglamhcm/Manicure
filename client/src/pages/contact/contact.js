import React, { Component } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './contact.css';
import Map from './map.svg';

class ContactPage extends Component {
  render() {
    return (
      <div className="contact">
        <Container>
          <Row className='mb-4'>
            <Col md={6} sm={6} sx={6}>
              <div className="text1 mt-5">Để lại tin nhắn, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</div>
              <Form>
                <Form.Group controlId="name">
                  {/* <Form.Label htmlFor="name">Họ tên</Form.Label> */}
                  <Form.Control type="text" placeholder="Họ tên" />
                </Form.Group>
                <Form.Group controlId="mail">
                  {/* <Form.Label htmlFor="mail">Email address</Form.Label> */}
                  <Form.Control type="email" placeholder="Địa chỉ email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  {/* <Form.Label>Mô tả sản phẩm của bạn</Form.Label> */}
                  <Form.Control as="textarea" rows="5" placeholder="Nhập nội dung của bạn" />
                </Form.Group>
                <div className='mt-4'>
                  <button type="button" class="btn btn-primary submitButton">Gửi</button>
                </div>
              </Form>
            </Col>
            <Col md={6} sm={6} sx={6}>
              <div className="text1 mt-5">Liên lạc trực tiếp với chúng tôi tại:</div>
              <div className="text2 mt-1">Công ty TNHH Thương mại Dịch vụ Nail Partner</div>
              <div className="text1 mt-1">Địa chỉ: 38 Nail Street, New York, USA</div>
              <div className="text1 mt-1">Tel: +84 3123 9123</div>
              <div className="text1 mt-1">Email: nail.system.2019@gmail.com</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="map mb-5 mt-4">
                <img src={Map} alt='Dia chi lien lac' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactPage;

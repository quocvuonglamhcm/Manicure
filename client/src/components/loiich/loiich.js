import React, { Component } from 'react';
import { Row, Col, Form, } from 'react-bootstrap';
import "./loiich.css";


class LoiIch extends Component {

  render() {
    return (
      <div id='main-loi-ich' className=''>
        <Row className='mr-0 ml-0'><div className='pu-litle mt-4'> Nail Partner mang lại</div></Row>

        <Row className='mr-0 ml-0'>
          <Col sm={6} md={6} sx={6} className='card-left mt-3'>
            <Col sm={12} md={12} sx={12} className='text-card-left mt-3'>Làm đẹp mọi lúc mọi nơi</Col>
            <Col sm={12} md={12} sx={12} className='text-card-left mt-3'>Cập nhật xu hướng làm đẹp mới</Col>
            <Col sm={12} md={12} sx={12} className='text-card-left mt-3'>Trao đổi với mọi người về tác phẩm đẹp</Col>
          </Col>

          <Row className='card-right mr-0 ml-0 mt-3'>
            <div className='hinh-tron1 '> </div>
            <div className='hinh-tron2'> </div>
            <div className='hinh-tron3'> </div>
          </Row>
        </Row>

        <Row className='mr-0 ml-0 float-right'>
          <Row className='col-sm-6'>

          </Row>


          <Row className='card-right-1 col-sm-6 mt-3'>
            <Row className='card-left-1 mr-0  mt-3'>
              <div className='hinh-tron4 '> </div>
              <div className='hinh-tron5'> </div>
              <div className='hinh-tron6'> </div>
            </Row>
            <Row className='col-sm-11'>
              <Col sm={12} md={12} sx={12} className='text-card-right-1 mt-3'>Thể hiện năng lực bản thân</Col>
              <Col sm={12} md={12} sx={12} className='text-card-right-1 mt-3'>Dễ dàng tiếp cận khách hàng mới</Col>
              <Col sm={12} md={12} sx={12} className='text-card-right-1 mt-3'>Chia sẻ kinh nghiệm làm đẹp với mọi người</Col>
            </Row>
          </Row>
        </Row>

      </div>
    );
  }
}

export default LoiIch;
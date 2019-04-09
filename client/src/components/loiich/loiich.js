import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import "./loiich.css";
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoiIch extends Component {

  render() {
    let ic_circle = <FontAwesomeIcon className="ic_circle " icon={faCircle} />
    return (
      <div id='main-loi-ich' className=''>
        <Row className='mr-0 ml-0'><div className='pu-litle mt-4'> Nail Partner mang lại</div></Row>

        <Row className='card-left-1 hover-loi-ich mr-0 ml-0 mt-3 height-khach-hang-170px'>
          <Col ml-2 sm={5} md={5} sx={5} className=''>
            <Row className='text-card-left-1 mt-3'>Làm đẹp mọi lúc mọi nơi</Row>
            <Row className='text-card-left-1 mt-3'>Cập nhật xu hướng làm đẹp mới</Row>
            <Row className='text-card-left-1 mt-3'>Chia sẻ với mọi người về tác phẩm đẹp</Row>
          </Col>

          <Col className='line-loi-ich-body'>

            <div className='line-loi-ich'></div>
            <div className='icon-circle margin-top-loi-ich-10'> {ic_circle}</div>
            <div className='icon-circle mt-5 '> {ic_circle}</div>
            <div className='icon-circle m-top-88 '> {ic_circle}</div>
          </Col>
          <Col sm={6} md={6} sx={6} className='height-khach-hang-170px'><div className='text-loi-ich hover-zoom'> Khách hàng</div></Col>
        </Row>

        <Row className='card-right-1 hover-loi-ich mr-0 ml-0 height-khach-hang-170px'>
          <Col sm={5} md={5} sx={5} className='height-khach-hang-170px'><div className='text-loi-ich hover-zoom'> Thợ nails</div></Col>

          <Col className='line-loi-ich-body'>
            <div className='line-loi-ich'></div>
            <div className='icon-circle margin-top-loi-ich-10'> {ic_circle}</div>
            <div className='icon-circle mt-5 '> {ic_circle}</div>
            <div className='icon-circle m-top-88 '> {ic_circle}</div>
          </Col>

          <Col ml-2 sm={6} md={6} sx={6} className=''>
            <Row className='text-card-right-1 mt-3'>Thể hiện năng lực bản thân</Row>
            <Row className='text-card-right-1 mt-3'>Dễ dàng tiếp cận khách hàng mới</Row>
            <Row className='text-card-right-1 mt-3'>Chia sẻ kinh nghiệm làm đẹp với mọi người</Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoiIch;
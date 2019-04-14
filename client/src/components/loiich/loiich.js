import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import "./loiich.css";
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoiIch extends Component {

  render() {
    let ic_circle = <FontAwesomeIcon className="ic_circle " icon={faCircle} />
    return (
      <Row id='main-loi-ich' className=''>
        <Col sm={12} md={12} sx={12} className='mr-0 ml-0 mt-2 pu-litle'> Nail Partner mang lại</Col>
        <Col className='card-left-1 hover-loi-ich mr-0 ml-0 mt-3 height-khach-hang-170px' sm={5} md={5} sx={5}>
          <Row className='text-card-left-1 mt-3'>Làm đẹp mọi lúc mọi nơi</Row>
          <Row className='text-card-left-1 mt-3'>Cập nhật xu hướng làm đẹp mới</Row>
          <Row className='text-card-left-1 mt-3'>Chia sẻ với mọi người về tác phẩm đẹp</Row>
        </Col>

        <Col className='ml-0 mt-3 line-loi-ich-body' sm={1} md={1} sx={1}>

          <div className='line-loi-ich'></div>
          <div className='icon-circle margin-top-loi-ich-10'> {ic_circle}</div>
          <div className='icon-circle mt-5 '> {ic_circle}</div>
          <div className='icon-circle m-top-88 '> {ic_circle}</div>
        </Col>
        <Col sm={5} md={5} sx={5} className='ml-0 mt-3 text-loi-ich hover-zoom'> <div className='text-loi-ich hover-zoom'>Khách hàng</div></Col>
{/* -------<CARD KHACH HANG></CARD> */}
        <Col sm={5} md={5} sx={5} className=' mt-2 hover-loi-ich mr-0 ml-0 height-khach-hang-170px'><div className='text-loi-ich hover-zoom'> Thợ nails</div></Col>

        <Col className='line-loi-ich-body mt-2 ' sm={1} md={1} sx={1}>
          <div className='line-loi-ich'></div>
          <div className='icon-circle margin-top-loi-ich-10'> {ic_circle}</div>
          <div className='icon-circle mt-5 '> {ic_circle}</div>
          <div className='icon-circle m-top-88 '> {ic_circle}</div>
        </Col>

        <Col sm={6} md={6} sx={6} className='mt-2 '>
          <Row className='text-card-right-1 mt-3'>Làm đẹp mọi lúc mọi nơi</Row>
          <Row className='text-card-right-1 mt-3'>Cập nhật xu hướng làm đẹp mới</Row>
          <Row className='text-card-right-1 mt-3'>Chia sẻ với mọi người về tác phẩm đẹp</Row>
        </Col>
      </Row>
    );
  }
}

export default LoiIch;
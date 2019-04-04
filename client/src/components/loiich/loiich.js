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
        {/* <Col sm={6} md={6} sx={6} className='card-left mt-3'>
            <Col sm={12} md={12} sx={12} className='text-card-left mt-3'>Làm đẹp mọi lúc mọi nơi</Col>
            <Col sm={12} md={12} sx={12} className='text-card-left mt-3'>Cập nhật xu hướng làm đẹp mới</Col>
            <Col sm={12} md={12} sx={12} className='text-card-left mt-3'>Trao đổi với mọi người về tác phẩm đẹp</Col>
          </Col>

          <Row className='card-right mr-0 ml-0 mt-3'>
            <div className='hinh-tron1 '> </div>
            <div className='hinh-tron2'> </div>
            <div className='hinh-tron3'> </div>
          </Row> */}

        <Row className='card-right-1 mr-0 ml-0 mt-3'>
            <Col sm={5} md={5} sx={5} className='chu-tho-nail'>Thợ nails</Col>
            <Col  className=''>
            <div className='line-loi-ich'></div>
              <div className='icon-circle '> {ic_circle}</div>
              {/* <div className='icon-circle mt-3 '> {ic_circle}</div> */}
              {/* <div className='icon-circle mt-3 '> {ic_circle}</div> */}
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
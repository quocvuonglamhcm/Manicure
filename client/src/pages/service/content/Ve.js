import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Ve() {
  return (
    <Col sm={4} md={4} sx={4} >
      <Col sm={12} md={12} sx={12} className='box-service'>
        <div className="AnhVeTrangTri"></div>
        <div className="TitleService">Vẽ trang trí</div>
        <Row >
          <Col sm={12} md={12} sx={12} >
            <div id='square2'>Thông tin thêm</div>
          </Col>
          <Col sm={12} md={12} sx={12} >
            <Link to={'/nailer'}>
              <div id='square2'>Gợi ý thợ</div>
            </Link>
          </Col>
        </Row>
      </Col>
    </Col>
  );
}
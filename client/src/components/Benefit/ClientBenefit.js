import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Benefit.css';

export default class ClientBenefit extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col sm={6} md={6} sx={6}>
          <Row>
            <div className="TitleBenefit">Đối với</div>
          </Row>
          <Row>
          <div className="UserBenefit">KHÁCH HÀNG</div>
          </Row>
          <Row>
          <div className="Benefit">Làm đẹp mọi lúc mọi nơi</div>
          </Row>
          <Row>
          <div className="Benefit">Cập nhật xu hướng làm đẹp mới</div>
          </Row>
          <Row>
          <div className="Benefit">Chia sẻ với mọi người về những tác phẩm đẹp</div>
          </Row>
        </Col>
        <Col sm={6} md={6} sx={6}>
          <div className="ClientBenefitImage"></div>
        </Col>
        </Row>          
      </Container>
    )
  }
}

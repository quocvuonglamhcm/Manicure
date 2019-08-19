import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Benefit.css';

export default class NailerBenefit extends React.Component {
  render() {
    return (
      <div className="NailerBenefitImage">
        <Container >
          <Row>
            <Col sm={7} md={7} sx={7}>
            </Col>
            <Col sm={5} md={5} sx={5}>
              <Row>
                <div className="TitleBenefit">Đối với</div>
              </Row>
              <Row>
                <div className="UserBenefit">THỢ NAIL</div>
              </Row>
              <Row>
                <div className="Benefit">Thể hiện năng lực bản thân</div>
              </Row>
              <Row>
                <div className="Benefit">Dễ dàng tiếp cận Khách hàng mới</div>
              </Row>
              <Row>
                <div className="Benefit">Chia sẻ kinh nghiệm làm đẹp với mọi người</div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}

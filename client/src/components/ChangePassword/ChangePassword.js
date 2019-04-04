import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './ChangePassword.css';

export default class TronGoi extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <div className='avatar'>
          </div>
        </Row>
        <Row>
          <div className='Title'>
            Đổi mật khẩu
          </div>
        </Row>
        <Row>
          <div className="Content-Password">
            <Row>
              <Col sm={4} md={4} sx={4} className="Left-Password">
                Mật khẩu
            </Col>
              <Col sm={8} md={8} sx={8}>
              </Col>
            </Row>
            <Row>
              <Col sm={4} md={4} sx={4} className="Left-Password">
                Mật khẩu mới
            </Col>
              <Col sm={8} md={8} sx={8}>
              </Col>
            </Row>
            <Row>
              <Col sm={4} md={4} sx={4} className="Left-Password">
                Xác nhận mật kểu mới
            </Col>
              <Col sm={8} md={8} sx={8}>
              </Col>
            </Row>
          </div>
        </Row>

      </Container>
    )
  }

}
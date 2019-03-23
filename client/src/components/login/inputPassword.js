import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import './login.css'

export default class InputPassword extends Component {
  render() {
    return (
      <Col>
        <Row className='form-input-password'>
          <Col sm={6} >
            <b style={{ userSelect: 'none', display: "block" }}>Mật khẩu</b><br />
            <b style={{ userSelect: 'none', display: "block" }}>nhập lại mật khẩu</b>
          </Col>
          <Col sm={6}>
            <input type='text' placeholder='Nhập mật khẩu' className='password mb-2' autoFocus />
            <input type='text' placeholder='Nhập lại mật khẩu' className='password' />
          </Col>
          <Col sm={12} className='d-flex justify-content-center mt-2'>
            <Button variant="warning" className='button-success'>Hoàn Thành</Button>
          </Col>
        </Row>
      </Col>
    )
  }
}
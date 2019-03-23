import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

import './step2.css'
import { Row } from 'react-bootstrap/Row';

export default class Step2 extends Component {
  Continue = () => {
    this.props.nextStep()
  }
  render() {
    return (
      <Row className='box-content' >
        <Col sm={12}>
          <b style={{ userSelect: 'none' }}>MÃ XÁC THỰC</b>
          <input type='text' placeholder='Nhập mã xác thực' className='mavung mr-3' autoFocus />
          <Button variant="warning" onClick={this.Continue} >Tiếp tục</Button>
        </Col>
        <span className='btn-cancel' onClick={this.props.displayLogin} >{this.props.ic_cancel}</span>
      </Row>
    )
  }
}
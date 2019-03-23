import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

import './step1.css'
import { Row } from 'react-bootstrap/';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
  }

  handleOnChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  Continue = () => {
    console.log('continue')
  }

  render() {
    return (
      <Row className='box-content'>
        <Col sm={12} md={12} sx={12}>
          <b style={{ userSelect: 'none' }}>SĐT</b>
          <input type='text' readOnly value='Viet Nam (+84)' className='mavung' />
          <input
            type='text' placeholder='Nhập số điện thoại'
            name='phone' onChange={this.handleOnChange}
            className='mavung mr-3' autoFocus />
          <Button variant="warning" onClick={this.Continue}>Gửi mã xác nhận</Button>
        </Col>
        <span className='btn-cancel' onClick={this.props.displayLogin}>{this.props.ic_cancel}</span>
      </Row>
    )
  }
}
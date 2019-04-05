import React, { Component } from 'react';
import { Col, Button, Container } from 'react-bootstrap';

import { Row } from 'react-bootstrap/';
export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
  }

  verify() {
    fetch('/api/account/sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: this.state.phone
      })
    })
      .then((data) => {
        console.log(data);
      })
  }

  handleOnChange = (e) => {
    this.setState({
      // [e.target.name]: e.target.value
      phone: e.target.value
    })
  }
  onRecicePhone(phone) {
    this.props.OnRecivePhone(phone)
  }
  Continue = (phone) => {
    this.verify()
    this.onRecicePhone(phone)
    this.props.nextStep();
  }

  render() {
    let { phone } = this.state;
    return (
      <Container className='box-content'>
        <Row >
          <Col className='d-flex justify-content-center'>
            <div className="sdt" style={{ userSelect: 'none' }}>Số điện thoại</div>
            <input type='text' readOnly value='Viet Nam (+84)' className='mavung' />
            <input
              type='tell' placeholder="Nhập số điện thoại"
              name='phone' onChange={this.handleOnChange}
              className='mavung ' autoFocus />
          </Col>    
        </Row>
        <Row>      
            <Button variant="warning" onClick={() => this.Continue(phone)} className="btnĐK">Gửi mã xác nhận</Button>          
        </Row>
      </Container>
    )
  }
}
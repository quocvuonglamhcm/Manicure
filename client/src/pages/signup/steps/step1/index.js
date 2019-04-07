import React, { Component } from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';

export default class Step1 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      phone: '',
      isLoading: false
    }
  }

  simulateNetworkRequest = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
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
      phone: e.target.value
    })
  }
  onRecicePhone(phone) {
    this.props.OnRecivePhone(phone)
  }
  Continue = (phone) => {
    this.onRecicePhone(phone)
    this.setState({ isLoading: true }, () => {
      this.simulateNetworkRequest()
        .then(() => {
          this.verify()
        })
        .then(() => {
          this.props.nextStep();
      })
    })
  }

  render() {
    let { phone, isLoading } = this.state;
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
          <Button
            variant="warning"
            disabled={isLoading}
            onClick={!isLoading ? () => this.Continue(phone) : null}
            className="btnĐK"
          >
            {isLoading ? "Đang gửi..." : "Gửi mã xác nhận"}
          </Button>
        </Row>
      </Container>
    )
  }
}
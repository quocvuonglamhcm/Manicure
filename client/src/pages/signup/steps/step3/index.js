import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';


export default class Step3 extends Component {
  prevStep = () => {
    this.props.prevStep();
  }
  render() {
    return (
      <Container className='box-content'>
        <Row  >
          <Col sm ={12}>
            <Row className='form-input-password'>
              <Col sm={3} >
                <b style={{ userSelect: 'none', display: "block" }}>Mật khẩu</b><br />
                <b style={{ userSelect: 'none', display: "block" }}>nhập lại mật khẩu</b>
              </Col>
              <Col sm={3}>
                <input type='text' placeholder='Nhập mật khẩu' className='password mb-2' autoFocus />
                <input type='text' placeholder='Nhập lại mật khẩu' className='password' />
              </Col>
              <Col sm={7} className='d-flex justify-content-end mt-2'>
                <Button variant="warning" className='button-success mr-2' onClick={this.prevStep}>quay lai</Button>
                <Button variant="warning" className='button-success'>Hoàn Thành</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
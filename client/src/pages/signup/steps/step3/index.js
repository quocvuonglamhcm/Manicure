import React, { Component } from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';


export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordAgain: ""
    }
  }
  prevStep = () => {
    this.props.prevStep();
  }
  verify = () => {
    console.log(this.props.phoneNumber)
  }
  getPasswordValue = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    })
  }
  finish = () => {
    this.verify();
    console.log(this.state)
  }
  render() {
    return (
      <Container className='box-content'>
        <div className="Content-Password">
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="4" md="4" sx="4" className="Left-Password">
                  Mật khẩu mới
              </Form.Label>
              <Col sm="8" md="8" sx="8">
                <Form.Control
                  type="password"
                  placeholder="Dài ít nhất 6 ký tự"
                  className='password'
                  minLength="6"
                  name="password"
                  onChange={this.getPasswordValue}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="4" md="4" sx="4" className="Left-Password">
                Xác nhận mật khẩu
                </Form.Label>
              <Col sm="8" md="8" sx="8">
                <Form.Control
                  type="password"
                  placeholder="Vui lòng xác nhận mật khẩu mới"
                  className='password'
                  name="passwordAgain"
                  onChange={this.getPasswordValue}
                />
              </Col>
            </Form.Group>
            <Row>
              <Col sm="4" md="4" sx="4"></Col>
              <Col sm="8" md="8" sx="8">
                <Button variant="warning" className='button-success ' onClick={this.finish}>Hoàn Thành</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    )
  }
}
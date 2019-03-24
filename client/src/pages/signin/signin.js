import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import './signin.css';
class SignIn extends Component  {
    render() {
        return (
            <div className="SignInComponent--Nailer">
                <Row>
                    <Col>
                        <div className="text-center">đăng nhập bằng</div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col >
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="4">
                                    Số điện thoại
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="Nhập số điện thoại" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="4" >
                                    Mật khẩu
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="password" placeholder="Nhập Password" />
                                </Col>
                                <Col sm='4'>
                                    <Button className="qmk">Quên mật khẩu</Button>
                                </Col>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button className="btnLogin">Đăng nhập</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default SignIn;


import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './SignIn.css'
class FormSignInComponent extends Component {
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
                                    số điện thoại
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="nhap sdt" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="4" >
                                    Mat khau
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                                <Col sm='4'>
                                    <Button >Quen mat khau</Button>
                                </Col>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button>dang</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FormSignInComponent;

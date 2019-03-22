import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import './SignIn.css'
class FormSignInComponent extends Component {
    render() {
        return (
            <div className="SignInComponent--Nailer">
                <Form>
                    <Col>
                        <div className="title">đăng nhập bằng</div>
                    </Col>
                    <div className="inform">
                        <Form.Group as={Row} controlId="formPlaintextSĐT">
                            <Form.Label column sm="2">
                                <div className="sđt">số điện thoại</div>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="textfield" type="pn" placeholder="Nhập số điện thoại" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextMK">
                            <Form.Label column sm="2">
                                <div className="mk">Mật khẩu</div>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="text" type="mk" placeholder="Nhập mật khẩu" />
                                <div className="qmk">
                                    <p className="text1">quên mật khẩu</p>
                                </div>
                                <div className="button-SignIn">
                                    <button className="đn">Đăng nhập</button>
                                </div>
                            </Col>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        );
    }
}

export default FormSignInComponent;

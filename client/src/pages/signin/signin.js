import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import './signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Zalo from '../../assets/images/Logo_Zalo.svg'
class SignIn extends Component {
    render() {
        let ic_facebook = <FontAwesomeIcon className="icFacebook " icon={faFacebookF} />
        let ic_google = <FontAwesomeIcon className="icGoogle " icon={faGoogle} />
        return (
            <div className="SignInComponent--Nailer">
                <Row>
                    <Col>
                        <h4 className="text-center m-0">đăng nhập bằng</h4>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col >
                        <div className="box-icon google">
                            <button className="p-0 btn">
                                {ic_google}<span>Google</span>
                            </button>
                        </div>
                    </Col>
                    <Col >
                        <div className="box-icon facebook">
                            <button className="p-0 btn">
                                {ic_facebook}<span>Facebook</span>
                            </button>
                        </div>
                    </Col>
                    <Col >
                        <div className="box-icon zalo">
                            <div className="icZalo">
                                <button className="p-0 btn">
                                    {/* <img src={Zalo} /><span>Zalo</span> */}
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col >
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="4">
                                    <div className="sđt">Số điện thoại</div>
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text" className="input" placeholder="Nhập số điện thoại" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="4" >
                                    <div className="mk">Mật khẩu</div>
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="password" placeholder="Nhập mật khẩu" />
                                </Col>
                                <Col sm={4}>
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


import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import './signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Zalo from '../../assets/images/Logo_Zalo.svg'
import Google from '../../assets/images/image8-2.svg'
class SignIn extends Component {
    render() {
        let ic_facebook = <FontAwesomeIcon className="icFacebook " icon={faFacebookF} />
        return (
            <div className="SignInComponent--Nailer">
                <Row>
                    <Col>
                        <div className="text-center">đăng nhập bằng</div>
                    </Col>
                </Row>
                <Row className="icon">
                    <Col sm={4}>
                    <div className="box-login">
                            <Col sm={1}>
                                <img className="ic_google" src={Google}></img>
                            </Col>
                    </div>    
                    </Col>
                    <Col sm={4}>
                        <div className="box-login">
                            <Col sm={1}>{ic_facebook}</Col>
                            
                        </div>
                    </Col>
                    <Col sm={4}>
                    <div className="box-login">
                            <img src={Zalo}/>
                            <Col sm={1}><div className="icZalo"></div></Col>
                    </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col >
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="4">
                                    Số điện thoại
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text" placeholder="Nhập số điện thoại" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="4" >
                                    Mật khẩu
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


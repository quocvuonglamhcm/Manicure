import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
// import { Row } from 'react-bootstrap/Form';
class Form1 extends Component {
    render() {
        return (
            <div className="SignIn--Nailer">
                <div className="SignIn--Nailer--form">
                    <h1 className="SignIn--Title">trở thành đối tác của chúng tôi</h1>
                    <Form>
                        <Form.Row className="lblfirstname">
                             <Form.Label>Họ và tên</Form.Label>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={6} md={6} sx={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="firstname" placeholder="Tên" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} sx={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="middlename" placeholder="Họ và tên đệm" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <div className="name">nơi đăng ký hoạt động</div>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                        <option className="inputfield">Thành phố Hồ Chí Minh</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                        <option>Quận 1</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                            <Button variant="success" className="btn">Quay lại</Button>
                            <Button variant="success" className="btn1">Tiếp tục</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form1;

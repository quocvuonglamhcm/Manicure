import React, { Component } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './contact.css'

class ContactPage extends Component {
    render() {
        return (
            <div className="contact">
                <Container>
                    <Row className="row mt-5">
                        <Col className='text-center'>
                            <div className="text1">Hoặc để lại tin nhắn, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</div>
                        </Col>
                    </Row>
                    <Row className = 'mb-4'>
                        <Col sm={6}>
                            {/* <form>
                                <div className="text1">Hoặc để lại tin nhắn, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</div>
                                <div className="form-group">
                                    <div className="mt-3">
                                        <input className="form-control" type="text" placeholder="Họ tên" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Địa chỉ email" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mô tả sản phẩm của bạn"></textarea>
                                    </div>
                                    <input className="btn btn-primary submitButton mt-2 mb-5" type="submit" value="SUBMIT" />
                                </div>
                            </form> */}
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label htmlFor="name">Họ tên</Form.Label>
                                    <Form.Control type="text" placeholder="Họ tên" />
                                </Form.Group>
                                <Form.Group controlId="mail">
                                    <Form.Label htmlFor="mail">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Địa chỉ email" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Mô tả sản phẩm của bạn</Form.Label>
                                    <Form.Control as="textarea" rows="5" />
                                </Form.Group>
                                <div className='text-center'>
                                <Button variant="primary">submit</Button>
                                </div>
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <div className="text1">Liên lạc trực tiếp với chúng tôi tại:</div>
                            <div className="text2 mt-1">Công ty TNHH Thương mại Dịch vụ Nail Partner</div>
                            <div className="text1 mt-1">Địa chỉ:</div>
                            <div className="text1 mt-1">096 994 2689</div>
                            <div className="text1 mt-1">nail.system.2019@gmail.com</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactPage;

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Form1 extends Component {
    render() {
      return (
        <div className="SignIn--Nailer">
                <div className="SignIn--Nailer--form">
                    <h1 class="SignIn--Title">form đăng ký thợ nail</h1>
                    <Container>
                            <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="firstname" placeholder="Tên" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="middlename" placeholder="Họ và tên đệm" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                       <Col>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <label className="SignIn--Label">
                                                        Nơi đăng ký hoạt động
                                                    </label>
                                                <Form.Control as="select">
                                                    <option>Thành phố Hồ Chí Minh</option>
                                                    <option>Bình Dương</option>
                                                    <option>Bình Phước</option>
                                                    <option>Tây Ninh</option>
                                                    <option>Đồng Nai</option>
                                                    <option>Long An</option>
                                                    <option>Tiền Giang</option>
                                                    <option>Bà Rịa-Vũng Tàu</option>
                                                    <option>Biên Hòa</option>
                                                    <option>Thủ Dầu Một</option>
                                                    <option>Mỹ Tho</option>
                                                </Form.Control>
                                            </Form.Group>
                                       </Col>
                                       <Col>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <label className="SignIn--Nailer--Dist"></label>
                                                <Form.Control as="select">
                                                    <option>Quận 1</option>
                                                    <option>Quận 2</option>
                                                    <option>Quận 3</option>
                                                    <option>Quận 4</option>
                                                    <option>Quận 5</option>
                                                    <option>Quận 6</option>
                                                    <option>Quận 7</option>
                                                    <option>Quận 8</option>
                                                    <option>Quận 9</option>
                                                    <option>Quận 10</option>
                                                    <option>Quận 11</option>
                                                    <option>Quận 12</option>
                                                    <option>Quận Thủ Đức</option>
                                                    <option>Quận Gò Vấp</option>
                                                </Form.Control>
                                            </Form.Group>
                                       </Col>
                                    </Row>
                            </Form>
                                <button className="SignIn--btn">Tiếp tục</button>
                    </Container>
                </div>
        </div>
      );
    }
  }
  
  export default Form1;
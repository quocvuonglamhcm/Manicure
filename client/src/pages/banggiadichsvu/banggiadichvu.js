import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import Oneclick from '../../todos/Oneclick';

class BangGiaDichVu extends Component {
  render() {
    return (
      <div className="BangGiaDichVu">
        <h1>Bang Gia Dich Vu</h1>


        <Container>
          <Row>
            <Col>Loai Hinh</Col>
            <Col>Gia Tham Khao</Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group size="sm" type="text" placeholder="Small text" controlId="exampleForm.ControlSelect1">
                  <Form.Control size="sm" type="text" placeholder="Small text" as="select">
                    <option>Tron goi tay hoac chan</option>
                    <option>Cham soc mong tay hoac mong chan</option>
                    <option>Dap bot</option>
                    <option>Dap mong gel</option>
                    <option>Ve trang tri</option>
                    <option>Dinh da</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <div>
                <InputGroup size="sm">
                  <Form>
                    <Form.Group size="sm" type="text" placeholder="Small text" controlId="exampleForm.ControlSelect1">
                      <Form.Control size="sm" type="text" placeholder="Small text" as="select">
                        <option>5000</option>
                        <option>6000</option>
                        <option>7000</option>
                        <option>8000</option>
                        <option>9000</option>
                        <option>10000</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </InputGroup>
              </div>
            </Col>
            <Col><h4>VND</h4></Col>
            <Col><button oneclick={Oneclick} >+</button></Col>
            <Col><button oneclick>-</button></Col>
          </Row>
          <Row>
            <Col>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup.Prepend>
                  Toi dong y voi cac dieu khoan hoat dong va chinh sach bao mat cua nail bartner
                </InputGroup>

              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <ButtonToolbar>
                  <Button variant="primary" size="lg">
                    Dang ky
                </Button>
                </ButtonToolbar>
              </div>
            </Col>

          </Row>
        </Container>;
      </div>
    );
  }
}

export default BangGiaDichVu;

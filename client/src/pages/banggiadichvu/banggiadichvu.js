import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';

class BangGiaDichVu extends Component {
  state = {
    items: ['1', '5','56', '555']
  }
  componentDidMount() {
    console.log(this.state.items)
    this.state.items.map(function(item, i){
      console.log(item)
    })
  }
  render() {

    return (
      <div className="BangGiaDichVu">
        <h1>Bang Gia Dich Vu</h1>
        <Col><button oneclick><h1>+</h1></button></Col>        
        {this.state.items.map((item, i) => <li>{item}</li>)}
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
            <Col><h4>Tu</h4></Col>
            <Col>
              <div>
              <Form.Control size="sm" type="text" placeholder="gia dich vu" />
              </div>
            </Col>
            <Col><h4>Den</h4></Col>
            <Col>
              <Form.Control size="sm" type="text" placeholder="gia dich vu" />
            </Col>
            <Col><h4>VND</h4></Col>
            
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

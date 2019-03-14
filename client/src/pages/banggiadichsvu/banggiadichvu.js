import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'; 
import Form from 'react-bootstrap/Form';

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
    <Col>Tron Goi Tay Hoac Chan</Col>
    <Col>
    <div>
    <InputGroup size="lg">
    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">VND</InputGroup.Text>
    </InputGroup.Prepend>    
    </InputGroup>
    </div>
    </Col>
    
  </Row>
  <Row>
    <Col>Cham Soc Mong Tay Hoac Chan</Col>
    <Col>
    <div>
    <InputGroup size="lg">
    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">VND</InputGroup.Text>
    </InputGroup.Prepend>    
    </InputGroup>
    </div>
    </Col>
  </Row>
  <Row>
    <Col>Dap Bot</Col>
    <Col>
    <div>
    <InputGroup size="lg">
    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">VND</InputGroup.Text>
    </InputGroup.Prepend>    
    </InputGroup>
    </div>
    </Col>
  </Row>
  <Row>
    <Col>Dap Mong Gel</Col>
    <Col>
    <div>
    <InputGroup size="lg">
    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">VND</InputGroup.Text>
    </InputGroup.Prepend>    
    </InputGroup>
    </div>
    </Col>
  </Row>
  <Row>
    <Col>Ve Trang Tri</Col>
    <Col>
    <div>
    <InputGroup size="lg">
    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">VND</InputGroup.Text>
    </InputGroup.Prepend>    
    </InputGroup>
    </div>
    </Col>
  </Row>
  <Row>
    <Col>Dinh Da</Col>
    <Col>
    <div>
    <InputGroup size="lg">
    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">VND</InputGroup.Text>
    </InputGroup.Prepend>    
    </InputGroup>
    </div>
    </Col>
  </Row>
  <Row>
    <Col>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>    
  </InputGroup>
    </Col>
    <Col>Toi dong y voi cac dieu khoan hoat dong va chinh sach bao mat cua nail partner</Col>
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

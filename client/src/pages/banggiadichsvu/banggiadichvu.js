import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import './banggiadichvu.css';
import FormControl from 'react-bootstrap/Form';

class BangGiaDichVu extends Component {
  render() {
    return (
      <div className="BangGiaDichVu">
        <div>
          <div className="canh-giua">
            <div><h1 className="text-title">Bang Gia Dich Vu</h1></div>
            <div><h1 className="button-title"><Button variant="suscess">+</Button></h1></div>
          </div>
          <Container className="container">
              <div className="text-title1">Loai Hinh</div>
              <div className="text-title2">Gia Tham Khao</div>
            <Row>
              <Col sm={5}>
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
              <Col sm={2}><h4 className="gia">Tu</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control className ="from-nhap-gia" size="sm={2}" type="text" placeholder="Nhap vao gia" />
              </Col>
              <Col sm={2}><h4 className="gia">Den</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control className ="from-nhap-gia" size="sm={2}" type="text" placeholder="Nhap vao gia" />
              </Col>
              <Col><h4 className="gia">VND</h4></Col>
              <Col><Button variant="suscess" className="button1">-</Button> </Col>
            </Row>
            <Row>
              <Col sm={5}>
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
              <Col sm={2}><h4 className="gia">Tu</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control className ="from-nhap-gia" size="sm={2}" type="text" placeholder="Nhap vao gia" />
              </Col>
              <Col sm={2}><h4 className="gia">Den</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control className ="from-nhap-gia" size="sm={2}" type="text" placeholder="Nhap vao gia" />
              </Col>
              <Col><h4 className="gia">VND</h4></Col>
              <Col><Button variant="suscess" className="button1">-</Button> </Col>
            </Row>
            <Row>
              <Col sm={5}>
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
              <Col sm={2}><h4 className="gia">Tu</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control className ="from-nhap-gia" size="sm={2}" type="text" placeholder="Nhap vao gia" />
              </Col>
              <Col sm={2}><h4 className="gia">Den</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control className ="from-nhap-gia" size="sm={2}" type="text" placeholder="Nhap vao gia" />
              </Col>
              <Col><h4 className="gia">VND</h4></Col>
              <Col><Button variant="suscess" className="button1">-</Button> </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    </InputGroup.Prepend>
                    Tôi đồng ý với các điều khoản hoạt động và chính sách bảo mật của nail Partner
                </InputGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <ButtonToolbar>
                    <Button variant="primary" size="lg" className="button-dang-ky">Dang ky</Button>
                  </ButtonToolbar>
                </div>
              </Col>
            </Row>
          </Container>;
        </div>
      </div>
    );
  }
}

export default BangGiaDichVu;

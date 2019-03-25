import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import './banggiadichvu.css';
//import datlich from '../../assets/images/plus-circle-solid.svg';
//import datlich1 from '../../assets/images/minus-circle-solid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap/'

class BangGiaDichVu extends Component {

  render() {
    let ic_plus = <FontAwesomeIcon className="ic_plus " icon={faPlusCircle} />
    let ic_minus = <FontAwesomeIcon className="ic_minus" icon={faMinusCircle} />
    return (
      <div className="BangGiaDichVu">
        <div>
          <div className="canh-giua">
            <div><h1 className="text-title">Bang Gia Dich Vu</h1></div>
            <div><h1 className="button-title"><Button variant="suscess" className="button1">
              <div className="datlich-image">
                {/* <div className="i-image">
                  {ic_plus} 
                </div> */}
              </div>
            </Button></h1></div>
          </div>

          <Container className="container">

            <div className="text-title1">Loai Hinh</div>
            <div className="text-title2">Gia Tham Khao VND</div>



            <Row>
              <Col className="col-canh" sm={4}>
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
              <Col ><h4 className="gia">Tu</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control type="nhap gia" placeholder="nhap gia" />
              </Col>
              <Col sm={2}><h4 className="gia1">~</h4></Col>
              <Col className="col-nhap-gia1" sm={2}>
                <Form.Control type="nhap gia" placeholder="nhap gia" />
              </Col>
              <Col><h4 className="gia">VND</h4></Col>
              <Col><Button variant="suscess" className="button1">
                <div className="datlich-image">
                  {ic_plus}
                  {/* <div className="i-image">
                    <img src={datlich1} />
                  </div> */}
                </div>
              </Button> </Col>
            </Row>
            <Row>
              <Col className="col-canh" sm={4}>
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
              <Col ><h4 className="gia">Tu</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control type="nhap gia" placeholder="nhap gia" />
              </Col>
              <Col sm={2}><h4 className="gia1">~</h4></Col>
              <Col className="col-nhap-gia1" sm={2}>
                <Form.Control type="nhap gia" placeholder="nhap gia" />
              </Col>
              <Col><h4 className="gia">VND</h4></Col>
              <Col><Button variant="suscess" className="button1">
                <div className="datlich-image">
                  <div className="i-image">
                    {ic_plus}
                  </div>
                  <div className="i-image">
                    {ic_minus}
                  </div>
                </div>
              </Button> </Col>
            </Row>
            <Row>
              <Col className="col-canh" sm={4}>
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
              <Col ><h4 className="gia">Tu</h4></Col>
              <Col className="col-nhap-gia" sm={2}>
                <Form.Control type="nhap gia" placeholder="nhap gia" />
              </Col>
              <Col sm={2}><h4 className="gia1">~</h4></Col>
              <Col className="col-nhap-gia1" sm={2}>
                <Form.Control type="nhap gia" placeholder="nhap gia" />
              </Col>
              <Col><h4 className="gia">VND</h4></Col>
              <Col><Button variant="suscess" className="button1">
                <div className="datlich-image">
                <div className="i-image">
                    {ic_plus}
                  </div>
                  <div className="i-image">
                    {ic_minus}
                  </div>
                  {/* <div className="i-image">
                    <img src={datlich1} />
                  </div> */}
                </div>
              </Button> </Col>
            </Row>
            <Row>

              {/* <div>
                <InputGroup className="mb-3">
                  <Form.Check aria-label="option 2" />
                  Toi dong y voi cac dieu khoan hoat dong va chinh sach bao mat cua nail bartner
                </InputGroup>
              </div> */}

            </Row>
            <Row>

              <div className="button-dang-ky">
                <ButtonToolbar className="button-dang-ky">
                  <Button variant size="lg" className="button-dang-ky">Hoan Thanh</Button>
                </ButtonToolbar>
              </div>


            </Row>
          </Container>;
        </div>
      </div>
    );
  }
}

export default BangGiaDichVu;

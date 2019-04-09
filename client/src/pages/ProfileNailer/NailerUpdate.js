import React, { Component } from 'react';
import { Row, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class NailerUpdate extends Component {
  render() {
    const ic_star = <FontAwesomeIcon className="fontSize25 yellow " icon={faStar} />
    return (
      <div className='NailerUpdate box '>
        <div className='avatar mt-3 mb-3'></div>
        <div className="UpdateImage">
          <input type="file" className="UpdateImageInput" accept="image/*" name="Chọn ảnh" />
          Thay đổi ảnh
        </div>
        <input type="file" className="UpdateImageInput" accept="image/*" name="Chọn ảnh" />
        <div className='nailer-name whiteColor mt-2'>Huynh Thi B</div>
        <div className='nailer-rate mt-2 mb-2'>{ic_star}{ic_star}{ic_star}{ic_star}{ic_star}</div>
        <Row >
          <Col sm={12} md={12} sx={12}> Mật khẩu</Col>
        </Row>
        <Row className="mb-3">
          <Col sm={6} md={6} sx={6}>
            <input type="password" name="firstname" value="********XX" className="password" readonly />
          </Col>
          <Col sm={6} md={6} sx={6}>
            <Link to={'/changepassword'}><div className="UpdateImage">Đổi mật khẩu</div>
            </Link>
          </Col>
        </Row>
        <Form>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
            <Form.Label column sm="7" md="7" sx="7">Giới tính</Form.Label>
          </Form.Group>
          <Form.Row>
            <Col sm={4} md={4} sx={4}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Nam</option>
                  <option>Nữ</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group as={Row} >
            <Form.Label column sm="6" md="6" sx="6">Ngày tháng năm sinh</Form.Label>
          </Form.Group>
          <Form.Row>
            <Col sm={4} md={4} sx={4}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Ngày</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={4} md={4} sx={4}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Tháng</option>
                  <option>Tháng 1</option>
                  <option>Tháng 2</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={4} md={4} sx={4}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Năm</option>
                  <option>1980</option>
                  <option>1981</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
            <Form.Label column sm="6" md="6" sx="6">Kinh nghiệm</Form.Label>
          </Form.Group>
          <Form.Row className=" mb-3">
            <Col sm={3} md={3} sx={3} className="FormUpdate ml-0">
              <Form.Control type="text" />
            </Col>
            <Col sm={1} md={1} sx={1}></Col>
            <Form column sm="3" md="3" sx="3" as="select" >
              <option>Tháng</option>
              <option>Năm</option>
            </Form>
          </Form.Row>
          <Row>
            <Col sm={5} md={5} sx={5}>
              <div >
                <div className='UpdateServicePrice'>Bảng giá dịch vụ</div>
              </div>
            </Col>
            <Col sm={7} md={7} sx={7}>
              <Link to={'/banggiadichvu'} ><div className="UpdateImage">Cập nhật</div>
              </Link>
            </Col>
          </Row>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className="mt-2">
            <Form.Label column sm="6" md="6" sx="6">Địa chỉ</Form.Label>
          </Form.Group>
          <Row>
            <Col sm={12} md={12} sx={12}  >
              <Form.Control type="text" placeholder="Số nhà, Đường, Phường, Quận"/>
            </Col>
          </Row>
          <Form.Group as={Row} >
            <Form.Label column sm="6" md="6" sx="6">Email</Form.Label>
          </Form.Group>
          <Row>
            <Col sm={12} md={12} sx={12}  >
              <Form.Control type="email" />
            </Col>
          </Row>
        </Form>
        <center><input type="submit" className="UpdateImage mt-3" value="Hoàn thành" /></center>
      </div>
    );
  }
}

export default NailerUpdate;
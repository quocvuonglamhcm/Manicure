import React, { Component } from 'react';
import { Row, Form, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class NailerUpdate extends Component {
  render() {
    const ic_star = <FontAwesomeIcon className="fontSize25 yellow " icon={faStar} />
    return (
      <div className='NailerUpdate box '>
        <div className='avatar mt-3'></div>
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
            <Form.Label column sm="6" md="6" sx="6">Giới tính</Form.Label>
            <Form column sm="6" md="6" sx="6" as="select">
              <option>Nam</option>
              <option>Nữ</option>
            </Form>
          </Form.Group>
          <Form.Group as={Row} >
            <Form.Label column sm="6" md="6" sx="6">Ngày tháng năm sinh</Form.Label>
            <Col sm={6} md={6} sx={6} className="FormUpdate" >
              <Form.Control type="date" className="FormUpdate" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
            <Form.Label column sm="6" md="6" sx="6">Kinh nghiệm</Form.Label>
            <Col sm={3} md={3} sx={3} className="FormUpdate">
              <Form.Control type="text" />
            </Col>
            <Form column sm="3" md="3" sx="3" as="select" >
              <option>Tháng</option>
              <option>Năm</option>
            </Form>
          </Form.Group>
          <Row>
            <Col sm={6} md={6} sx={6}>
              <div classname="UpdateServicePrice">
                Bảng giá dịch vụ
              </div>
            </Col>
            <Col sm={6} md={6} sx={6}>
              <Link to={'/banggiadichvu'} ><div className="UpdateImage">Cập nhật</div>
              </Link>
            </Col>
          </Row>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className="mt-2">
            <Form.Label column sm="6" md="6" sx="6">Địa chỉ</Form.Label>
            <Form.Label column sm="3" md="3" sx="3">Số nhà</Form.Label>
            <Col sm={3} md={3} sx={3} className="FormUpdate">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Row>
            <Col sm={6} md={6} sx={6}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Thành phố</option>
                  <option>Thành phố Hồ Chí Minh</option>
                  <option>Thành phố Hà Nội</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={6} md={6} sx={6}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Quận</option>
                  <option>Quận 1</option>
                  <option>Quận 2</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={6} md={6} sx={6}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Phường</option>
                  <option>Phường 1 </option>
                  <option>Phường 2</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={6} md={6} sx={6}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Đường</option>
                  <option>Đường Nguyễn Trãi</option>
                  <option>Đường Hai Bà Trưng</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group as={Row} >
            <Form.Label column sm="6" md="6" sx="6">Email</Form.Label>
            <Col sm={6} md={6} sx={6} className="FormUpdate" >
              <Form.Control type="email" className="FormUpdate" />
            </Col>
          </Form.Group>
        </Form>
        <center><input type="submit" className="UpdateImage" value="Hoàn thành" /></center>
      </div>
    );
  }
}

export default NailerUpdate;
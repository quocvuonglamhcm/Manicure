import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './upproducts.css'

class upProductsPage extends Component {
  render() {
    return (
      <div className='uploadProduct'>
        <Container>
          <Row className="mt-5">
            <Col sm={3} md={3} sx={3}></Col>
            <Col sm={6} md={6} sx={6} className="callText textSize1">
              Đăng sản phẩm độc đáo theo phong cách riêng của bạn
                </Col>
          </Row>
          <Row className='mt-5'>
            <Col sm={1} md={1} sx={1}></Col>
            <Col sm={4} md={4} sx={4}>
              <form>
                <div className="form-group">
                  <input class="form-control" type="text" placeholder="Tên sản phẩm" />
                </div>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFile" accept="image/*" />
                  <label className="custom-file-label" htmlFor="customFile">Tải tác phẩm lên...</label>
                </div>
                <div className="form-group mt-3">
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Loại dịch vụ</option>
                    <option>Trọn gói cho tay và chân</option>
                    <option>Chăm sóc móng tay hoặc chân</option>
                    <option>Đắp bột</option>
                    <option>Đắp móng gel</option>
                    <option>Vẽ trang trí</option>
                    <option>Đính đá</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mô tả tác phẩm"></textarea>
                </div>
              </form>
            </Col>
            <Col sm={6} md={6} sx={6}>
              <div className="pictureView">Xem trước ảnh tác phẩm</div>
            </Col>
          </Row>
          <Row>
            <Col sm={5} md={5} sx={5}></Col>
            <Col sm={2} md={2} sx={2}>
              <input className="btn btn-primary saveButton" type="submit" value="Đăng ảnh" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default upProductsPage;
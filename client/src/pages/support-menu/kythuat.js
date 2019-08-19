import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Container, InputGroup, FormControl, Collapse } from 'react-bootstrap/'
// import Collapse from 'react-bootstrap/Collapse';
import './support-menu.css';
//import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

import datlich from '../../assets/images/ic_datlich.svg';
import kythuat from '../../assets/images/ic_.svg';
import taikhoan from '../../assets/images/ic_taikhoan.svg';
import tho from '../../assets/images/ic_tho.svg';



class menu_kythuat extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render() {

    const { open } = this.state;
    const { open1 } = this.state;
    // const { open2 } = this.state;
    let ic_search = <FontAwesomeIcon className="ic-search " icon={faSearch} />
    return (
      <Container className='text-center mt-4' id="support-menu">

        {/* Welcome text */}

        <Row >
          <Col>
            <div className='slo'>Xin chào, Nail Partner có thể giúp gì cho bạn?</div>
          </Col>
        </Row>
        {/* Search Bar */}
        <Row className="justify-content-center m-3">
          <Col sm={6}>
            <InputGroup className="mb-3" size='sm'>
              <FormControl className='menu-form-input'
                placeholder="Bạn có thắc mắc gì về Nail Partner"
              />
              <InputGroup.Append>
                <Button type='button' className='menu-search-sp'>{ic_search}</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>

        {/* Menu */}

        <Row>
          <Col sm={3}>
            <Link className='menu-links' to={'/datlich'}>
              <div className='support-menu'>
                <img src={datlich} alt="dl" />
                <div className='support-menu-title'>
                  Đặt Lịch
                            </div>
              </div>
            </Link>
          </Col>
          <Col md={8}>
            <div className='questions'>
              <ol>
                <li className='direct-quest' onClick={() => this.setState({ open: !open })}>Ứng dụng gặp sự cố trên hệ điều hành Android</li>
                <Collapse in={this.state.open}>
                  <div className='answers'>
                    Bạn đã thử tắt và bật lại ứng dụng chưa? Việc cài đặt lại ứng dụng Nail Partner thường sẽ giải quyết các vấn đề phổ biến. Điều này sẽ giúp bạn có phiên bản mới nhất, tốt nhất, an toàn nhất của ứng dụng. Hướng dẫn gỡ cài đặt và cài đặt lại được liệt kê dưới đây:
                                        <ol>
                      <li>Trên điện thoại hoặc máy tính bảng Android, hãy mở ứng dụng Cửa hàng Google Play.</li>
                      <li>Nhấn vào Menu     Ứng dụng và trò chơi của tôi   Thư viện.</li>
                      <li>Nhấn vào ứng dụng Nail Partner. Nếu bạn không thấy nó, hãy thử chọn xem tất cả ứng dụng hoặc thông tin ứng dụng.</li>
                      <li>Nhấn Gỡ cài đặt</li>
                      <li>Khởi động lại thiết bị của bạn</li>
                      <li>Mở ứng dụng Cửa hàng Google Play.</li>
                      <li>Nhấn vào Menu Ứng dụng và trò chơi của tôi Thư viện.</li>
                      <li>Nhấn vào ứng dụng Nail Partner.</li>
                      <li>Nhấn vào Cài đặt hoặc Bật.</li>
                    </ol>
                  </div>
                </Collapse>
                <li className='direct-quest' onClick={() => this.setState({ open1: !open1 })}>Ứng dụng gặp sự cố trên hệ điều hành IOS</li>
                <Collapse in={this.state.open1}>
                  <div className='answers'>
                    Bạn đã thử tắt và bật lại ứng dụng chưa? Việc cài đặt lại ứng dụng Nail Partner thường sẽ giải quyết các vấn đề phổ biến. Điều này sẽ giúp bạn có phiên bản mới nhất, tốt nhất, an toàn nhất của ứng dụng. Hướng dẫn gỡ cài đặt và cài đặt lại được liệt kê dưới đây:
                                    <ol>
                      <li>Chạm và giữ biểu tượng ứng dụng Nail Partner cho đến khi nó rung</li>
                      <li>Nhấn vào X ở góc trên bên trái của ứng dụng</li>
                      <li>Nhấn vào Xóa để xác nhận</li>
                      <li>Khởi động lại thiết bị của bạn</li>
                      <li>Mở ứng dụng App Store, sau đó nhấn Ứng dụng ở phía dưới</li>
                      <li>Nhấn vào biểu tượng hồ sơ ở góc trên bên phải, sau đó nhấn Đã mua</li>
                      <li>Chuyển sang thẻ Không phải trên (thiết bị) này</li>
                      <li>Tìm Nail Partner, sau đó nhấn vào biểu tượng đám mây để cài đặt lại</li>
                    </ol>
                  </div>
                </Collapse>
              </ol>
              {/* <Cauhoi/> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Link className='menu-links' to={'/kythuat'}>
              <div className='support-menu'>
                <img src={kythuat} alt="kt" />
                <div className='support-menu-title'>
                  Kỹ thuật
                            </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Link className='menu-links' to={'/taikhoan'}>
              <div className='support-menu'>
                <img src={taikhoan} alt="tk" />
                <div className='support-menu-title'>
                  Tài khoản
                            </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Link className='menu-links' to={'/tho'}>
              <div className='support-menu'>
                <img src={tho} alt="th" />
                <div className='support-menu-title'>
                  Từ người thợ
                            </div>
              </div>
            </Link>
          </Col>
        </Row>
        {/* Questions */}

        {/* Support Contact */}

        <Row className="m-4">
          <Col>
            <div className="mb-2 menu-btn-slo">Liên hệ với chúng tôi!</div>
            <Button type='button' className='p-3 menu-contact-btn'>Trò chuyện ngay</Button>
          </Col>
        </Row>
      </Container >
    );
  }
}
export default menu_kythuat;
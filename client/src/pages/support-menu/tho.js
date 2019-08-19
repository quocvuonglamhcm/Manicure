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



class menu_taikhoan extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render() {

    const { open } = this.state;
    const { open1 } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    // const { open4 } = this.state;
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
                <li className='direct-quest' onClick={() => this.setState({ open: !open })}>Trao đổi giữa mọi người sau khi thực hiện dịch vụ</li>
                <Collapse in={this.state.open}>
                  <div className='answers'>
                    Khách hàng sẽ để lại một bình luận trên trang tác phẩm:
                    Trang tác phẩm là một nơi hoàn hảo để thu hút khách hàng tích cực trong trang của bạn vì người tham dự sẽ được thông báo khi người khác nhận xét sản phẩm bằng thông báo đẩy hoặc email.
                    Hãy đăng ngay trên trang tác phẩm khi vừa thực hiện xong dịch vụ. Chúng tôi khuyên bạn nên chia sẻ ảnh tác phẩm như một lời cảm ơn của bạn với tất cả những khách hàng, một bản tóm tắt ngắn về tác phẩm để giới thiệu với các khách hang tiếp theo của bạn.
                                    </div>
                </Collapse>
                <li className='direct-quest' onClick={() => this.setState({ open1: !open1 })}>Xem đánh giá từ khách hàng</li>
                <Collapse in={this.state.open1}>
                  <div className='answers'>
                    Trong một cuộc khảo sát gần đây với các thợ nail, bạn đã nói với chúng tôi rằng nhận phản hồi từ các khách hàng là một trong những thách thức lớn nhất của bạn. Bây giờ, chúng tôi sẽ thu thập thông tin phản hồi trực tiếp từ các khách hàng và chia sẻ nó với thợ nail.
                    Thợ nail có thể xem phản hồi từ các khách hàng về các tác phẩm gần đây bao gồm xếp hạng sao và phản hồi ngắn dựa trên xếp hạng của họ.
                                    </div>
                </Collapse>
                <li className='direct-quest' onClick={() => this.setState({ open2: !open2 })}>Cập nhật tác phẩm</li>
                <Collapse in={this.state.open2}>
                  <div className='answers'>
                    Mang tính đồng dạng, linh hoạt
                    Chúng tôi sẽ tạo biểu mẫu cho bạn để tăng tính linh hoạt cho việc bạn có thể tự thêm những tác phẩm mới. Nó giúp bạn kiểm soát nhiều hơn các tác phẩm mà bạn cần.
                                    </div>
                </Collapse>
                <li className='direct-quest' onClick={() => this.setState({ open3: !open3 })}>Cắt ảnh và định vị ảnh tác phẩm nail</li>
                <Collapse in={this.state.open3}>
                  <div className='answers'>
                    Bạn có công cụ để làm cho ảnh tác phẩm nổi bật và trông tuyệt vời trên trang của mình
                    Bây giờ khi bạn tải lên ảnh tác phẩm, bạn có thể dễ dàng cắt và định vị hình ảnh sao cho phù hợp với không gian 16: 9. Lấy các đường cắt từ bất kỳ góc nào để tạo khung ảnh đẹp nhất.
                    Công cụ này hiện có sẵn trên web máy tính và web di động.
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

export default menu_taikhoan;
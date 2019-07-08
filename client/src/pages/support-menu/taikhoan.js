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
        const { open4 } = this.state;
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
                                <li className='direct-quest' onClick={() => this.setState({ open: !open })}>Làm cách nào để tôi đăng ký tài khoản?</li>
                                <Collapse in={this.state.open}>
                                    <div className='answers'>
                                        Bạn muốn tham gia Nail Partner. Chào mừng đến với cộng đồng của chúng tôi. Nhưng trước tiên, bạn cần tạo một tài khoản Nail Partner một cách miễn phí. Đó là cách tốt nhất để nói với các cộng đồng tương lai của bạn một chút về bản thân bạn,
                                        và nó cũng giúp chúng tôi kết hợp bạn với những người mà bạn sẽ quan tâm nhất khi gặp gỡ. Việc tạo tài khoản nail Partner rất nhanh chóng và dễ dàng cho bất kỳ ai, và trong vài phút, bạn sẽ được giới thiệu một loạt các thợ nail trong khu vực địa phương của bạn. Làm thôi nào. Chúng tôi rất vui mừng khi mọi người gặp nhau.
                                        Để tạo tài khoản Nail Partner từ trình duyệt trên máy tính để bàn hoặc thiết bị di động của bạn, hãy truy cập www.nailpartner.com và nhấp Đăng ký ở chính giữa trang.
                                        Để tạo tài khoản Meetup từ thiết bị Android hoặc iOS của bạn, hãy tải xuống ứng dụng, mở nó và chỉ cần nhấn Đăng ký. Nó rất dễ đăng ký.
                                        Và nhân tiện, khi tạo tài khoản, bạn có tùy chọn sử dụng địa chỉ email của mình hoặc chỉ cần kết nối qua tài khoản Facebook, Google hay Zalo.
                                    </div>
                                </Collapse>
                                <li className='direct-quest' onClick={() => this.setState({ open1: !open1 })}>Tại sao tôi cứ bị đăng xuất?</li>
                                <Collapse in={this.state.open1}>
                                    <div className='answers'>
                                        Nếu bạn không thể đăng nhập vào Nail Partner trên trình duyệt web trên máy tính để bàn của bạn, chúng tôi muốn giúp bạn khắc phục điều đó ngay lập tức. Chúng tôi có một vài ý tưởng về những gì có thể là gốc rễ của vấn đề.
                                        Bạn đã kiểm tra cài đặt bảo mật của trình duyệt chưa? Bạn có thể muốn tìm hiểu thêm về việc tắt cookie hoặc xóa bộ nhớ cache của bạn.
                                        Nó có thể liên quan đến phần mềm chống vi-rút của bạn. Kiểm tra cài đặt phần mềm chống vi-rút của bạn để chắc chắn NailPartner.com nằm trong danh sách được phép.
                                        Nếu bạn vẫn gặp sự cố khi đăng nhập sau khi xem xét các khả năng ở trên, vui lòng liên hệ với chúng tôi bên dưới và gửi email cho chúng tôi.
                                    </div>
                                </Collapse>
                                <li className='direct-quest' onClick={() => this.setState({ open2: !open2 })}>Làm thế nào để thiết lập lại mật khẩu của tôi?</li>
                                <Collapse in={this.state.open2}>
                                    <div className='answers'>
                                        Nếu bạn quên mật khẩu cho tài khoản Nail Partner của mình, chúng tôi rất vui lòng hỗ trợ bạn tạo một mật khẩu mới để đặt lại.
                                        Để đặt lại mật khẩu của bạn:
                                        Trên máy tính để bàn và thiết bị di động:
                                    <ol>
                                            <li>Chuyển đến trang Đăng nhập</li>
                                            <li>Nhấp vào Quên mật khẩu của bạn?</li>
                                            <li>Nhập số điện thoại bạn sử dụng cho tài khoản Nail Partner của mình</li>
                                            <li>Nhấp vào Gửi mã xác nhận</li>
                                            <li>Xác nhận mã</li>
                                            <li>Điền vào mật khẩu mới</li>
                                        </ol>
                                        Trên ứng dụng Android và iOS:
                                    <ol>
                                            <li>Nhấn đăng nhập trên Android hoặc nhấn Đăng nhập trên iOS</li>
                                            <li>Nhấn Quên mật khẩu?</li>
                                            <li>Nhập số điện thoại bạn sử dụng cho tài khoản Nail Partner của mình</li>
                                            <li>Nhấp vào Gửi mã xác nhận</li>
                                            <li>Xác nhận mã</li>
                                            <li>Điền vào mật khẩu mới</li>
                                        </ol>
                                        Nếu bạn không có quyền truy cập vào số điện thoại bạn sử dụng cho tài khoản Nail Partner của mình, hãy liên hệ với chúng tôi bên dưới và Nhóm hỗ trợ cộng đồng của chúng tôi sẽ giúp bạn quay lại tài khoản của mình.
                                    </div>
                                </Collapse>
                                <li className='direct-quest' onClick={() => this.setState({ open3: !open3 })}>Tại sao tôi không nhận được email của Nail Partner?</li>
                                <Collapse in={this.state.open3}>
                                    <div className='answers'>
                                        Việc giữ kết nối email phụ thuộc vào thông tin mà bạn đăng ký. Có một vài lý do khiến email của chúng tôi có thể không đến được với bạn.
                                        Nếu bạn không còn nhận được bất kỳ email nào từ Nail Partner, bạn nên kiểm tra các thư mục khác (Spam / Junk) trong tài khoản email của bạn, nơi mà email có thể đã được định tuyến. Người dùng Gmail cũng nên kiểm tra thẻ Social của họ. Bạn cũng có thể đảm bảo những thông báo của Nail Partner được gửi trực tiếp đến bạn bằng cách thêm nail.system.2019@gmail.com vào sổ địa chỉ hoặc danh sách liên lạc của bạn.
                                        Nếu các email bị thiếu có thể được tìm thấy trong các thư mục đó, thì có thể các email đó đã bị gửi trả lại cho chúng tôi. Điều này có thể xảy ra nếu địa chỉ email mà chúng tôi có trong hồ sơ cho bạn không còn hợp lệ hoặc khi nhà cung cấp email của bạn từ chối thư của chúng tôi mà bạn không biết.
                                        Một vài gợi ý hữu ích khác:
                                        Hãy chắc chắn kiểm tra cài đặt của nhà cung cấp email của bạn để xem email của Nail Partner có bị chặn không
                                        Sau đó, đừng quên thêm nail.system.2019@gmail.com vào sổ địa chỉ hoặc danh sách liên lạc của bạn để ngăn vấn đề này xảy ra lần nữa trong tương lai.
                                        Nếu bạn đã thử tất cả các bước này, nhưng vẫn không nhận được email Meetup của chúng tôi, hãy cho chúng tôi biết bằng cách liên hệ với chúng tôi dưới đây và chúng tôi sẽ cùng nhau tìm ra.
                                    </div>
                                </Collapse>
                                <li className='direct-quest' onClick={() => this.setState({ open4: !open4 })}>Tôi không nhận được mã xác nhận để tạo tài khoản</li>
                                <Collapse in={this.state.open4}>
                                    <div className='answers'>
                                        Nếu bạn đã yêu cầu một mã xác nhận mà vẫn chưa nhận được trong vòng 5-10 phút, rất có thể nó nằm trong tin nhắn đã bị bạn bỏ qua hoặc xóa nhầm. Hãy kiểm tra kỹ xem nó có thể ở vị trí nào đó trong tin nhắn của bạn. Nếu không tìm thấy bạn hãy nhấn gửi mã xác nhận lại một lần nữa.
                                        Nếu vẫn không nhận được mã xác nhận, vui lòng liên hệ với chúng tôi ở bên dưới và nhóm hỗ trợ cộng đồng của chúng tôi sẽ giúp bạn sắp xếp.
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
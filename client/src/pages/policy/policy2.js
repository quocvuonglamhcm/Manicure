import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './policy.css';
    
class policy2Page extends Component {
    render() {
        return (
            <div className="dataSecurity">
                <Container>
                    <Row className="mt-5">
                        <Col md={3}></Col>
                        <Col md={6} className="title">MỤC ĐÍCH SỬ DỤNG THÔNG TIN</Col>
                    </Row>
                    <Row className="mt-4 mb-5">
                        <Col md={4} className="leftContent">
                            <div className="tag"><Link to={'/policy1'}>Thông tin chúng tôi thu thập</Link></div>
                            <div className="tag"><Link to={'/policy2'}>Mục đích sử dụng thông tin</Link></div>
                            <div className="tag"><Link to={'/policy3'}>Mục đích chia sẻ thông tin</Link></div>
                            <div className="tag"><Link to={'/policy4'}>Thông tin chi tiết</Link></div>
                            <div className="tag"><Link to={'/policy5'}>Cộng đồng hỗ trợ</Link></div>
                            <div className="tag"><Link to={'/policy6'}>Những sự lựa chọn của bạn</Link></div>
                            <div className="tag"><Link to={'/policy7'}>Quyền dữ liệu</Link></div>
                        </Col>
                        <Col md={8}>
                            <div className="contentBox">
                                <ol>
                                    <li>
                                    Chúng tôi có thể sử dụng thông tin về bạn cho các mục đích khác nhau liên quan đến việc vận hành ứng dụng của chúng tôi, bao gồm:
                                    </li><br />
                                    <li>
                                        <ul>
                                            <li>
                                                Sử dụng thông tin về vị trí của khách hàng để tìm kiếm nhà cung cấp dịch vụ có sẵn xung quanh khu vực của khách hàng, giúp nhà cung cấp dịch vụ tính toán chi phí 
                                                và phân tích các chỉ số của ứng dụng nhằm sử dụng cho việc cải thiện hiệu năng của ứng dụng.
                                            </li>
                                            <li>
                                                Cung cấp, duy trì và cải thiện  ứng dụng của chúng tôi, bao gồm xử lý các giao dịch, phát triển các nội dung mới và quản lý hiệu suất của ứng dụng của chúng tôi.
                                            </li>
                                            <li>
                                                Hiển thị thông tin về bạn, ví dụ như danh sách tác phẩm sẽ hiển thị trên hồ sơ của bạn. 
                                            </li>
                                            <li>
                                                Cho phép bạn chia sẻ thông tin về việc bạn sử dụng ứng dụng thông qua dịch vụ truyền thông xã hội của bên thứ ba, nếu bạn kết nối tài khoản của mình thông qua dịch vụ đó 
                                                (bạn có thể tắt bất cứ lúc nào) và cung cấp cho bạn các đề xuất tốt hơn.
                                            </li>
                                            <li>
                                                Theo dõi và phân tích xu hướng sử dụng và các hoạt động liên quan đến ứng dụng của chúng tôi.
                                            </li>
                                            <li>
                                                Phát hiện, điều tra và ngăn chặn các giao dịch gian lận, lạm dụng và các hoạt động bất hợp pháp khác để bảo vệ các quyền, tài sản hoặc sự an toàn của Nail Partner 
                                                và những người khác, thực thi việc tuân thủ các chính sách của chúng tôi và tuân thủ luật pháp hiện hành, yêu cầu của chính phủ.
                                            </li>
                                            <li>
                                                Thực hiện các nhiệm vụ kế toán và hành chính và thực thi hoặc quản lý các yêu cầu pháp lý.
                                            </li>
                                        </ul>
                                    </li><br />
                                    <li>
                                        Chúng tôi có thể sử dụng thông tin về bạn cho các mục đích khác nhau liên quan đến việc trao đổi với bạn, bao gồm:
                                        <ul>
                                            <li>
                                                Trả lời các câu hỏi và yêu cầu của bạn về ứng dụng.
                                            </li>
                                            <li>
                                                Thông báo cho bạn về thông tin liên lạc của các thành viên khác, phù hợp với các tùy chọn liên lạc mà bạn chỉ ra trong tài khoản của mình;
                                            </li>
                                            <li>
                                                Gửi cho bạn thông báo kỹ thuật, cập nhật, cảnh báo bảo mật và hỗ trợ, tin nhắn từ quản trị.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            <div>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default policy2Page;
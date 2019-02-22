import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAppStoreIos  } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const ic_appStore = <FontAwesomeIcon className="fontSize25 mr-2" icon={faAppStoreIos} />
    const ic_googlePlay = <FontAwesomeIcon className="fontSize25 mr-2" icon={faGooglePlay} />
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="aboutUsTitle font-weight-bold pb-2">
                            Về chúng tôi
                        </div>
                        <div className="aboutUsContent">
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, a search for 'lorem ipsum' will unco many web sites still in their infancy
                            </div>
                        <div className="font-weight-bold pt-2">Điều khoản và điều lệ</div>
                    </Col>
                    <Col md={3}>
                        <form>
                            <div className="form-group font-weight-bold">
                                <label htmlFor="exampleInputEmail1">Gửi Email phản hồi</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mail@example.com" />
                                <small id="emailHelp" className="form-text text-muted">Email của bạn sẽ được bảo mật</small>
                            </div>
                            <div className="form-group font-weight-bold">
                                <label htmlFor="exampleFormControlTextarea1">Nội dung</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                    </Col>
                    <Col md={3}>
                        <div className="download font-weight-bold">Tải App</div>
                        <div className="chPlay">{ic_googlePlay}</div>
                        <div className="appStore">{ic_appStore}</div>
                    </Col>
                    <Col md={3}>
                        <div className="contactTitle font-weight-bold pb-2">Thông tin liên hệ</div>
                        <div className="address pb-1">38 Nail Street, New York, USA</div>
                        <div className="phoneNumber pb-1">+84 3123 9123</div>
                        <div className="supportMail">nail.system.2019@gmail.com</div>
                        <div className="footSocial"></div>
                    </Col>
                </Row>
                <div className="footBar">
                    <Container>
                        <div className="copywright">2019 Copywright by Nails-system Corp</div>
                    </Container>
                </div>
            </Container>
        </div>
    )
}

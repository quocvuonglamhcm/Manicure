import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Container, InputGroup, FormControl, Media } from 'react-bootstrap/'
import './support-menu.css';
import Card from 'react-bootstrap/Card'

import datlich from '../../assets/images/ic_datlich.svg';
import kythuat from '../../assets/images/ic_.svg';
import taikhoan from '../../assets/images/ic_taikhoan.svg';
import tho from '../../assets/images/ic_tho.svg';


class menu_datlich extends Component {
    render() {
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
                        <div className='support-menu'>
                            <img src={datlich} />
                            <div className='support-menu-title'>
                                Đặt Lịch
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className='questions'>
                            <ol>
                                <li className='direct-quest'>Tại sao chúng tôi chỉ có 30 phút đặt mua vé?</li>
                                <li className='direct-quest'>Tôi có thể đặt lịch với nhiều thợ trong 1 đơn giao dịch không?</li>
                                <li className='direct-quest'>Tôi có được hủy lịch không?</li>
                            </ol>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <div className='support-menu'>
                            <img src={kythuat} />
                            <div className='support-menu-title'>
                                Kỹ thuật
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <div className='support-menu'>
                            <img src={taikhoan} />
                            <div className='support-menu-title'>
                                Tài khoản
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <div className='support-menu'>
                            <img src={tho} />
                            <div className='support-menu-title'>
                                Từ người thợ
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Questions */}
                {/* <div className='questions'>
                        <ul>
                            <li className='direct-quest'>Tại sao chúng tôi chỉ có 30 phút đặt mua vé?</li>
                        </ul>
                    </div> */}
                {/* <Row className="mt-4 mb-5">
                        <Col md={8}>
                        <div className='questions'>
                        <ul>
                            <li className='direct-quest'>Tại sao chúng tôi chỉ có 30 phút đặt mua vé?</li>
                        </ul>
                    </div>
                        </Col>
                    </Row> */}
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
export default menu_datlich;
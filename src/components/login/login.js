import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import './login.css'

export default class Login extends Component {
    render() {
        return (
            <Row className='box-content' >
                <Col>
                    <b>SĐT</b>
                    <input type='text' readOnly value='Viet Nam (+84)' className='mavung'/>
                    <input type='text' placeholder='Nhập số điện thoại' className='mavung mr-2' />
                    <Button variant="warning">Gửi mã xác nhận</Button>
                </Col>
            </Row>
        )
    }
}
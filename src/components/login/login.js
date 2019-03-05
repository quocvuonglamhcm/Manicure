import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

import './login.css'

export default class Login extends Component {
    Continue = () =>{
        this.props.nextStep()
    }
    render() {
        return (
            <Col sm={12}>
                <b style={{ userSelect: 'none' }}>SĐT</b>
                <input type='text' readOnly value='Viet Nam (+84)' className='mavung' />
                <input type='text' placeholder='Nhập số điện thoại' className='mavung mr-3' autoFocus />
                <Button variant="warning" onClick = {this.Continue}>Gửi mã xác nhận</Button>
            </Col>
        )
    }
}
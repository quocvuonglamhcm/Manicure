import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

import './login.css'

export default class Validation extends Component {
    Continue = () => {
        this.props.nextStep()
    }
    render() {
        return (
            <Col sm={12}>
                <b style={{ userSelect: 'none' }}>MÃ XÁC THỰC</b>
                <input type='text' placeholder='Nhập mã xác thực' className='mavung mr-3' autoFocus />
                <Button variant="warning" onClick = {this.Continue} >Tiếp tục</Button>
            </Col>

        )
    }
}
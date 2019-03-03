import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'

import './login.css'

export default class Login extends Component {
    render() {
        const ic_cancel = <FontAwesomeIcon className="fontSize25 white " icon={faTimesCircle} />
        return (
            <div className='overlay' >
                <Row className='box-content' >
                    <Col sm = {12}>
                        <b>SĐT</b>
                        <input type='text' readOnly value='Viet Nam (+84)' className='mavung'/>
                        <input type='text' placeholder='Nhập số điện thoại' className='mavung mr-3' autoFocus />
                        <Button variant="warning" id>Gửi mã xác nhận</Button>
                    </Col>                        
                    <span className='btn-cancel'>{ic_cancel}</span>
                </Row>
            </div>
        )
    }
}
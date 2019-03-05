import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import fireBase from '../../js/firebase';

import './login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    Continue = () =>{
        const data = {
                phone_number: this.state.phone,
                verify_number: Math.random().toString().substr(2, 4),
                status: false,
                created_at: Date.now()
        };

        fireBase.database().ref(`nails/signup/${this.state.phone}`)
            .set(data)
            .then(function(){
                console.log('ok');
            })
            .catch(function(){
                console.log('no');
            });
        }

    handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Col sm={12}>
                <b style={{ userSelect: 'none' }}>SĐT</b>
                <input type='text' readOnly value='Viet Nam (+84)' className='mavung' />
                <input
                    type='text' placeholder='Nhập số điện thoại'
                    name='phone' onChange={this.handleOnChange}
                    className='mavung mr-3' autoFocus />
                <Button variant="warning" onClick = {this.Continue}>Gửi mã xác nhận</Button>
            </Col>
        )
    }
}
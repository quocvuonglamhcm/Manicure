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

    createProfile(uid, phone) {
        fireBase.database().ref(`nails/users/${uid}`).set(
        {
            ho_ten: '',
            phone: phone,
            address: '',
            services: [{
                cat_toc: {
                    name: 'fff'
                },
                lammong: {
                    name: 'fff'
                }
            }],
            products: [],
        }).then((data) => {
            console.log('Khoi tao thong tin thanh cong')
        }).catch((error) => {
            console.log('Error');
            console.log(error);
        })
    }

    verify() {
      fetch('/sms/verify_number', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: this.state.phone
        })
      })
      .then((data) => {
        console.log(data);
      })
    }

    Continue = () =>{
      this.verify()
      // const email = `${this.state.phone}@nails.com`;
      // fireBase.auth().createUserWithEmailAndPassword(
      //     email,
      //     '12345qwert'
      //     ).then((data) => {
      //         console.log(data);
      //         console.log(data.user.uid);
      //         this.createProfile(data.user.uid, this.state.phone);
      //     }).catch((error) => {
      //         console.log('Error', error);
      //     })
        // const data = {
        //         phone_number: this.state.phone,
        //         verify_number: Math.random().toString().substr(2, 4),
        //         status: false,
        //         created_at: Date.now()
        // };

        // fireBase.database().ref(`nails/signup/${this.state.phone}`)
        //     .set(data)
        //     .then(function(){
        //         console.log('ok');
        //     })
        //     .catch(function(){
        //         console.log('no');
        //     });
        //     this.props.nextStep()
    }

    handleOnChange = (e) => {
        // console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Col sm={12} md={12} sx={12}>
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
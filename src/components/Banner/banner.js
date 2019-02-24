import React, { Component } from 'react';
import './banner.css'
import { Row } from 'react-bootstrap';

import LoginPage from '../../pages/account/loginPage';

class Background extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayLogin : false
        }
    }


    displayLogin = () => {
        this.setState({
            isDisplayLogin : !this.state.isDisplayLogin
        })
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
            <Row className="banner">
                <div className='banner__content'>
                    <p>đăng nhập hoặc đăng ký ngay</p>
                    <button className="btn btn-signup">Đăng ký</button>
                    <button className="btn btn-login" onClick = {this.displayLogin}>
                        Đăng nhập
                    </button>
                </div>
            </Row>
            {/* <Login /> */}
            {this.state.isDisplayLogin ? <LoginPage /> : null}
            </React.Fragment>
        );
    }
}

export default Background;

import React, { Component } from 'react';
import './banner.css'
import { Row } from 'react-bootstrap';
import SignUpContainer from '../login/SignUpContainer';

import '../Form/form.css';
class Background extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayLogin: false
        }
    }

    displayLogin = () => {
        this.setState({
            isDisplayLogin: !this.state.isDisplayLogin
        })
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <Row className="banner">
                    <div className='banner__content'>
                        <p>Tham gia ngay</p>
                        <button className="btn btn-signup" onClick={this.displayLogin}>
                            Đăng ký
                        </button>
                        <button className="btn btn-login">
                            Đăng nhập
                        </button>
                    </div>
                </Row>
                {this.state.isDisplayLogin ? <SignUpContainer displayLogin={this.displayLogin} /> : null}
            </React.Fragment>
        );
    }
}

export default Background;

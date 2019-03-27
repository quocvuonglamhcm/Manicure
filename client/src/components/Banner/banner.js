import React, { Component } from 'react';
import './banner.css'
import { Row } from 'react-bootstrap';
import SignUp from '../../pages/signup/signup';
class Background extends Component {
    constructor(props) {
        super(props)
        this.state = { modalShow: false };
    }

    displayLogin = () => {
        this.setState({
            modalShow : true
        })
        console.log(this.state)
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
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
                <SignUp show={this.state.modalShow} onHide={modalClose}/>
            </React.Fragment>
        );
    }
}

export default Background;

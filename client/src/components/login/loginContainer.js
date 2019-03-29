import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import Login from './login'
import Validation from './validation'
import InputPassword from './inputPassword'

import './login.css'

export default class LoginContainer extends Component {
    state = {
        step: 1,
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    render() {
        const ic_cancel = <FontAwesomeIcon className="fontSize25 white " icon={faTimesCircle} />
        const { step } = this.state;
        switch (step) {
            case 1:
                return (
                    <div className='overlay' >
                        <Row className='box-content' >
                            <Login nextStep ={this.nextStep}/>
                            <span className='btn-cancel' onClick={this.props.displayLogin}>{ic_cancel}</span>
                        </Row>
                    </div>
                )
            case 2:
                return (
                    <div className='overlay'  >
                        <Row className='box-content' >
                            <Validation nextStep={this.nextStep} prevStep = {this.prevStep} />
                            <span className='btn-cancel' onClick={this.props.displayLogin} >{ic_cancel}</span>
                        </Row>
                    </div>
                )
            case 3:
                return (
                    <div className='overlay'>
                        <Row className='box-content' >
                        <InputPassword prevStep = {this.prevStep} />
                            <span className='btn-cancel' onClick={this.props.displayLogin}>{ic_cancel}</span>
                        </Row>
                    </div>
                )
            default:
                return null;
        }

    }
}
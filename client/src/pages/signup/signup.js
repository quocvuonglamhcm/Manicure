import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import './signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Step1 from './steps/step1/step1';
import Step2 from './steps/step2/step2';
import Step3 from './steps/step3/step3';

class SignUp extends Component {
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
    const { step } = this.state
    switch (step) {
      case 1:
        return (
          <Step1 nextStep={this.nextStep} ic_cancel={ic_cancel} />
        )
      case 2:
        return (
          <Step2 nextStep={this.nextStep} prevStep={this.prevStep} ic_cancel={ic_cancel} />
        )
      case 3:
        return (
          <Step3 prevStep={this.prevStep} ic_cancel={ic_cancel} />
        )
      default:
        return null;
    }
  }
}

export default SignUp;

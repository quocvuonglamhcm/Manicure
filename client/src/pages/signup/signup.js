import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import { Modal} from 'react-bootstrap';
import './signup.css'
import Body from './modalBody'

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
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='justify-content-center'>
          <Modal.Title id="contained-modal-title-vcenter">
              Đăng ký
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Body />
        </Modal.Body>
      </Modal>
    );
  }
}

  export default SignUp

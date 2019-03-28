import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './modal.css'
class ModalComponent extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        {/* <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter" >
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="p-0">
          {this.props.body()}
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalComponent

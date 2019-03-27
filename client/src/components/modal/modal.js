import React, { Component } from 'react';
import { Modal} from 'react-bootstrap';

class ModalComponent extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body closeButton>
          {this.props.body()}
        </Modal.Body>
      </Modal>
    );
  }
}

  export default ModalComponent

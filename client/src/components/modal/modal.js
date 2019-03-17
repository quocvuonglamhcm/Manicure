import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom'

const JSX_MODAL = (
  <div className="modal fade" role="dialog">
    <div className="ui standard modal visible active">
      THIS IS SOME TEXT IN THE MODAL // add some UI features here
    </div>
  </div>
);

Modal.setAppElement('#modal')

class ModalDialog extends Component {
  constructor () {
    super();
    this.state = {
      showModal: true,
      goHome: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({
      showModal: true,
      goHome: false
     });
  }

  handleCloseModal () {
    this.setState({
      showModal: false,
      goHome: true
     });
  }

  goHome = () => {
     if (this.state.goHome) {
       return <Redirect to='/' />
     }
   }

  render() {
    return (
      <React.Fragment>
        {this.goHome()}
        <Modal
        isOpen={true}
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseModal}
          >
          <h1>Demo</h1>
        </Modal>
      </React.Fragment>
    )
  }
}


export default ModalDialog;

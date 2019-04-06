import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ModalContainer from '../modal/modal'
import SignUp from '../../pages/signup'
import Login from '../../pages/signin/signin'
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css';
import Avatar from '../../assets/images/AVT.svg';
class HeaderComponentM extends Component {
  constructor(props) {
    super(props)

    this.state = { modalShow: false, login: false };
  }
  displaySignUp = () => {
    this.setState({
      modalShow: true,
      login: false
    })
  }
  displayLogin = () => {
    this.setState({
      modalShow: true,
      login: true
    })
  }
  returnBodySignUp = () => {
    return (
      <SignUp />
    )
  }
  returnBodyLogin = () => {
    return <Login />
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let ic_search = <FontAwesomeIcon className="ic_search " icon={faSearch} />
    return (
            <Dropdown className="abc">
              <Dropdown.Toggle id="dropdown-custom-components">
                <div className="ahaha">
                   <img src={Avatar}/>
                </div>
            </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

    );
  }
}

export default HeaderComponentM;

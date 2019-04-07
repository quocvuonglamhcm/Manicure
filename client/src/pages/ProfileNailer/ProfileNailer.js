import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import NailerUpdate from "./NailerUpdate"

class ProfileNailer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={3} md={3} sx={3}>
            <NailerUpdate />
          </Col>
          <Col sm={9} md={9} sx={9}>
            <NailerNewRight />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileNailer;
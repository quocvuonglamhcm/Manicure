import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './nailer.css'
// import NailerID from '../../components/nailer-id/nailer-id'
// import NailerFilterRate from '../../components/nailer-id/nailer-filter-rate'
// import NailerFilterLocation from '../../components/nailer-id/nailer-filter-location'
import NailerInfor from '../../components/nailer-id/nailer-infor'
import NailerNewRight from '../../components/nailer-id/nailer-new-right'

class NailerPageNew extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={3} md={3} sx={3}>
            <NailerInfor />
          </Col>
          <Col sm={9} md={9} sx={9}>
            <NailerNewRight />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NailerPageNew;

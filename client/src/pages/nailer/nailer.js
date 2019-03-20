import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nailer.css'
import NailerID from '../../components/nailer-id/nailer-id'
import NailerFilterRate from '../../components/nailer-id/nailer-filter-rate'
import NailerFilterLocation from '../../components/nailer-id/nailer-filter-location'

class NailerPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <NailerFilterRate/>
          <NailerFilterLocation/>
        </Row>
        <Row>
          <div className='col-sm-2'>
          <Link to={'/nailer-new'}><NailerID/></Link>
          </div>
        </Row>
        <Row>
        <div className='col-sm-3 center mt-3'>
          <button type="button" class="btn btn-primary btn-block">Xem thêm </button>
        </div>
        </Row>
      </Container>
    );
  }
}

export default NailerPage;

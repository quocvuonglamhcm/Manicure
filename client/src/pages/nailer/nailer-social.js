import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './nailer.css'
// import NailerID from '../../components/nailer-id/nailer-id'
// import NailerFilterRate from '../../components/nailer-id/nailer-filter-rate'
// import NailerFilterLocation from '../../components/nailer-id/nailer-filter-location'
import NailerInfor from '../../components/nailer-id/nailer-infor'
import NailerSocialRight from '../../components/nailer-id/nailer-social-right'

class NailerPageSocial extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className='col-sm-3'>
                        <NailerInfor />
                    </div>
                    <div className='col-sm-9'>
                        <NailerSocialRight/>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default NailerPageSocial;

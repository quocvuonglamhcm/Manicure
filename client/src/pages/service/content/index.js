import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="right-service">
                <div className="title1">Danh sách dịch vụ</div>
                <Row>
                    <TronGoi />
                    <TronGoi />
                    <TronGoi />
                    <TronGoi />
                    <TronGoi />
                    <TronGoi />
                    <TronGoi />
                </Row>
            </div>
        );
    }
}

const TronGoi = () => {
    return (
        <Col sm={4} md={4} sx= {4} >
            <Col sm={12} md={12} sx={12} className='box-service'>
            <div className="AnhTronGoi"></div>
                <div className="text2">Trọn gói cho tay hoặc chân</div>
                <Row >
                    <Col sm={7} md={7} sx={7} >
                        <div id='square2'>Thông tin thêm</div>
                    </Col>
                    <Col sm={5} md={5} sx={5} >
                        <div id='square2'>Gợi ý thợ</div>
                    </Col>
                </Row>
            </Col>
        </Col>
    );
}

export default Content;
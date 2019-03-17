import React, { Component } from 'react';
import { Row, } from 'react-bootstrap';

import Item from './Item';

class RightContent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="right-service">
                <h3 className="title">Danh sách dịch vụ</h3>
                <Row>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    
                </Row>
            </div>
        );
    }
}
export default RightContent;
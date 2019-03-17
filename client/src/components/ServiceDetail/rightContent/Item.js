import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Item = () => {
    return (
        <Col sm={4} md={4} className='box-service'>
            <Col sm={12} md={12} sx={12}>
                <img width="100%" height="200px" src="https://muachungcdn.com/thumb_w/960,99/product/thumbnail/2017/06/26/0.734900001498475106.jpg" />
                <div className="text2">Trọn gói cho tay hoặc chân</div>
                <Row className='mt-2'>
                    <Col sm={6}>
                        <button className='btn btn-primary' >Thông tin thêm</button>
                    </Col>
                    <Col sm={6}>
                        <button className='btn btn-primary '>Gợi ý thợ</button>
                    </Col>
                </Row>
            </Col>
        </Col>
    );
}


export default Item;
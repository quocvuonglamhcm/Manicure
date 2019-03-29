import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../../pages/service/service.css';
import { Row, Col } from 'react-bootstrap';

export default function TronGoi() {
    const ic_check = <FontAwesomeIcon className="fontSize25 white " icon={faCheck} />
    return (
        <div>
            <div className="text2">Bạn sẽ được tận hưởng</div>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Tư vấn kiểu dáng và phong cách thiết kế phù hợp.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Xử lý móng ban đầu như tháo lớp gel cũ và bôi dưỡng phục hồi để đưa móng về nguyên trạng.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Chăm sóc móng, làm sạch viền da, giúp lấy đi các tế bào chết, bụi bẩn quanh móng để móng tay được gọn gàng, sạch sẽ hơn.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Sửa dáng móng và xử lý bề mặt móng.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Sơn hoặc đắp gel nền và gel màu.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Vẽ mẫu móng nghệ thuật và phủ bóng bảo vệ móng.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Dưỡng mềm da tay, massage nhẹ nhàng.</div>
                </Col>
            </Row>
        </div>
    )
}        
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
                    <div className="text1">Làm sạch móng.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Cắt và dũa móng.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Phủ lớp sơn lót (lớp nền).</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Sơn móng tay.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Đính đá.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Quét lớp sơn bóng.</div>
                </Col>
            </Row>
        </div>
    )
}
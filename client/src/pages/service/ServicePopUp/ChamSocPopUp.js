import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import '../../pages/service/service.css';

export default function ChamSocPopUp() {
    const ic_check = <FontAwesomeIcon className="fontSize25 white " icon={faCheck} />
    return (
        <div>
            <div className="text2">Bạn sẽ được tận hưởng</div>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Tẩy sơn móng tay cũ (Nếu có)</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Dũa móng tay</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Làm sạch vùng da thừa xung quanh móng</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Tẩy tế bào chết</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Dưỡng ẩm da tay</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Sơn móng tay</div>
                </Col>
            </Row>
        </div>
    )
}

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
                    <div className="text1">Khách hàng hàng sẽ được kỹ thuật viên cắt phần da thừa của tay hoặc chân giúp đôi bàn tay/chân sạch sẽ xinh tươi</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Gợi ý tham khảo và tư vấn các hình dáng móng phù hợp với khách hàng</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Kỹ thuật viên dùng dũa định hình dáng của móng</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Sơn lớp dưỡng bảo vệ móng, giúp móng chắc khoẻ, ngăn chặn tình trạng gãy/xước và nấm móng</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Tiến hành sơn gel theo màu đã được khách lựa chọn</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Phủ bóng toàn bộ nhằm giúp màu sơn bền màu và chắc móng</div>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1} sx={1}>
                    {ic_check}
                </Col>
                <Col sm={11} md={11} sx={11}>
                    <div className="text1">Thoa dung dịch dưỡng da quanh móng giúp da tránh trầy xước và giảm thiểu tình trạng nấm móng.</div>
                </Col>
            </Row>
        </div>
    )
}

import React, { Component } from 'react';
import './body-loi-ich.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Row,Col } from 'react-bootstrap';

export default function bodyloiichComponent() {
    const ic_check = <FontAwesomeIcon className="float-left color-red" icon={faCheck} />
    return (
        <div className='body-loi-ich mt-3'>
            <div className='text-tieu-de'>Nails Partner sẽ mang đến cho </div>

            <div id='card-1'>
                <div className='text-tieu-de text-align-left'>Khách hàng </div>
                <Row>
                    {ic_check} 
                    <div className='contentloiich'>Làm đẹp tại mọi lúc, mọi nơi</div></Row>
                <Row>
                {ic_check} 
                <div className='contentloiich'>Luôn cập nhật xu hướng làm đẹp</div></Row>
                <Row>
                {ic_check} 
                <div className='contentloiich'>Thuận tiện chia sẻ kiến thức làm đẹp</div></Row>
            </div>

            <div id='card-2'>
                <div className='text-tieu-de text-align-left'>Thợ Nails </div>
                <Row>{ic_check} 
                <div className='contentloiich'>Dễ dàng tiếp cận các khách hàng mới</div></Row>
                <Row>{ic_check}
                <div className='contentloiich'>Giới thiệu bản thân miễn phí</div></Row>
                <Row>{ic_check} 
                <div className='contentloiich'>Chia sẻ kiến thức làm đẹp với mọi người</div></Row>
            </div>
        </div>)
}


import React, { Component } from 'react';
import './body-loi-ich.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
export default function bodyloiichComponent() {
    const ic_check = <FontAwesomeIcon className="float-left color-red" icon={faCheckCircle} />
    return (
        <div className='body-loi-ich mt-3'>
            <div className='text-tieu-de'>Nails partner sẽ mang đến cho </div>

            <div id='card-1'>
                <div className='text-tieu-de text-align-left'>Khách hàng </div>
                <div className='row'>{ic_check} <p className='margin-left-10 float-left font-size'>Làm đẹp tại mọi lúc, mọi nơi</p></div>
                <div className='row'>{ic_check} <p className='margin-left-10 float-left font-size'>Luôn cập nhật xu hướng làm đẹp</p></div>
                <div className='row'>{ic_check} <p className='margin-left-10 float-left font-size'>Thuận tiện chia sẻ kiến thức làm đẹp</p></div>
            </div>

            <div id='card-2'>
                <div className='text-tieu-de text-align-left'>Thợ Nails </div>
                <div className='row'>{ic_check} <p className='margin-left-10 float-left font-size'>Dễ dàng tiếp cận các khách hàng mới</p></div>
                <div className='row'>{ic_check} <p className='margin-left-10 float-left font-size'>Giới thiệu bản thân miễn phí</p></div>
                <div className='row'>{ic_check} <p className='margin-left-10 float-left font-size'>Chia sẻ kiến thức làm đẹp với mọi người</p></div>
            </div>
        </div>)
}


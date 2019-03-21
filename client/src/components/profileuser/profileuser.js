import React, { Component } from 'react';
import {  Row } from 'react-bootstrap'
import './profileuser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProfileUser() {
    const ic_exit = <FontAwesomeIcon className="float-left color-red" icon={faTimesCircle} />
    return (
        <div>
            <div className='center'>
                <div id='height-50'> <h1 id='tieude'> Cập nhật thông tin tài khoản</h1></div>

                <div id='line'></div>

                <div className='exit'>{ic_exit}</div>

                <div id='height-900px;'>
                    <div className='height-224'>
                        <div id='avt'></div>
                        <Row><button type="button" class="btn btn-warning margin-auto">Thay đổi</button></Row>
                    </div>
                </div>

                <div className='card border-0 mt-3'>
                    <form>
                        <div className='row card-1 ml-0 mr-0 '>
                            <div className='col-sm-3'>
                                <p className='text-card'> Họ và tên </p>
                            </div>

                            <input className='col-sm-9 height-50' placeholder='Vui lòng điền thông tin đầy đủ' />
                            <div className=' text-card-3'><p> Vui lòng điền thông tin đầy đủ* </p></div>
                        </div>

                        <div className='row card-1 ml-0 mr-0'>
                            <div className='col-sm-3'>
                                <p className='text-card'> Số điện thoại </p>
                            </div>

                            <input className='col-sm-9 height-50' placeholder='*********' />

                            <div className=' text-card-3'><p> Số điện thoại không đúng </p></div>
                        </div>

                        <div className='row card-1 ml-0 mr-0 '>
                            <div className='col-sm-3'>
                                <p className='text-card'>Mật khẩu</p>
                            </div>

                            <div><input className='col-sm-12 height-50' placeholder='******' /></div>

                            <div className=' text-card-3'><p> Sai mật khẩu* </p></div>

                            <button type="button" className="btn btn-warning margin-right-0 height-50 width-150">Đổi mật khẩu</button>
                        </div>

                        <div className='row card-1 ml-0 mr-0 '>
                            <div className='col-sm-3'>
                                <p className='text-card'> Giới tính </p>
                            </div>

                            <div className='col-sm-9 height-50 border-0'>
                                <input type="radio" name="gender" value="male" /> Nam
								 	<input type="radio" name="gender" value="female" className='margin-lefl-100' /> Nữ
							</div>
                        </div>

                        <div className='row card-1 mr-0 ml-0  margin-top--20'>
                            <div className='col-sm-3'>
                                <p className='text-card'> Ngày sinh </p>
                            </div>

                            <div className="input-group date">
                                <input type="text" className="form-control" placeholder="12-02-2012" />
                                <div className="input-group-addon">
                                    <span className="glyphicon glyphicon-th"></span>
                                </div>
                            </div>
                        </div>

                        <div className='row card-1 ml-0 mr-0 '>
                            <div className='col-sm-3'>
                                <p className='text-card'> Email </p>
                            </div>

                            <input className='col-sm-9 height-50' placeholder='Vui lòng điền thông tin đầy đủ' />
                            <div className=' text-card-3'><p> Nhập mail </p></div>
                        </div>

                        <div className='row card-1 ml-0 mr-0'>
                            <div className='col-sm-3'>
                                <p className='text-card'> Địa chỉ </p>
                            </div>

                            <input className='col-sm-9 height-50' placeholder='Số nhà, đường, quận/huyện, thành phố' />
                        </div>

                        <div className='row card-1 ml-0 mr-0'>
                            <button className="button button3">Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
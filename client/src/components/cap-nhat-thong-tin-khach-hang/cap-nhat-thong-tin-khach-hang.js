import React, { Component } from 'react';
import './cap-nhat-thong-tin-khach-hang.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function capnhatthongtinkhachhangComponent() {
    const ic_exit = <FontAwesomeIcon className="float-left color-red" icon={faTimesCircle} />
    return (
        <React.Fragment>
            <div id='height-50'> <h1 id='tieude'> Cập nhật thông tin tài khoản</h1></div>

            <div id='line'></div>
            <div className='exit'>{ic_exit}</div>


            <div id='height-900px;'>
                <div style={{height:224+'px'}}>
                    <div id='avt'></div>
                    <p id='text-avt'>Ảnh đại diện</p>
                </div>

                <div className='card border-0'>
                    <form>
                        <div className='row card-1' style='margin-right:0px;margin-left:0px; '>
                            <div className='col-sm-3'>
                                <p className='text-card'> Họ và tên </p>
                            </div>

                            <input className='col-sm-9 height-50' placeholder='Vui lòng điền thông tin đầy đủ' />
                            <div className=' text-card-3'><p> Vui lòng điền thông tin đầy đủ* </p></div>
                        </div>

                        <div className='row card-1' style='margin-right:0px;margin-left:0px; '>
                            <div className='col-sm-3'>
                                <p className='text-card'> Nhập mật khẩu </p>
                            </div>

                            <input className='col-sm-9 height-50' placeholder='Nhập mật khẩu' />

                            <div className=' text-card-3'><p> Vui lòng điền thông tin đầy đủ* </p></div>
                        </div>

                        <div className='row card-1' style='margin-right:0px;margin-left:0px; '>
                            <div className='col-sm-3'>
                                <p className='text-card'> Nhập lại mật khẩu </p>
                            </div>

                            <input class='col-sm-9 height-50' placeholder='Nhập mật khẩu' />
                            <div class=' text-card-3'><p> Sai mật khẩu* </p></div>
                        </div>

                        <div class='row card-1' style='margin-right:0px;margin-left:0px; '>
                            <div class='col-sm-3'>
                                <p class='text-card'> Địa chỉ </p>
                            </div>

                            <input class='col-sm-9 height-50' placeholder='Nhập địa chỉ' />
                        </div>

                        <div class='row card-1' style='margin-right:0px;margin-left:0px;margin-top:-20px; '>
                            <div class='col-sm-3'>
                                <p class='text-card'> Giới tính </p>
                            </div>

                            <div class='col-sm-9 height-50 border-0'>
                                <form action="">
                                    <input type="radio" name="gender" value="male" /> Nam
								 	<input type="radio" name="gender" value="female" style='margin-left:100px' /> Nữ
								</form>
                            </div>
                        </div>

                        <div class='row card-1' style='margin-right:0px;margin-left:0px;margin-top:-40px;'>
                            <div class='col-sm-3'>
                                <p class='text-card'> Ngày sinh </p>
                            </div>

                            <div class="input-group date">
                                <input type="text" class="form-control" value="12-02-2012" />
                                <div class="input-group-addon">
                                    <span class="glyphicon glyphicon-th"></span>
                                </div>
                            </div>
                        </div>

                        <div class='row card-1' style='margin-right:0px;margin-left:0px;margin-top: '>
                            <button class="button button3">Cập nhật</button>
                        </div>

                    </form>
                </div>
                </div>
                        </React.Fragment>
            )
    
            }
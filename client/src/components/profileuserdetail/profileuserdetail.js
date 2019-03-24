import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import "./profileuserdetail.css";


class ProfileUserdetail extends Component {

      render() {
            return (
                  <div id='profile-user-detail'>
                        <Row> <div className='mt-1 pu-title'>Cập nhật thông tin tài khoản </div></Row>

                        <Row className='mt-1' id='line'></Row>

                        <Row className='body-avt' className='avt-profie-user-detail'>  </Row>

                        <Row > <button className="button mt-1 button-avt button3">Cập nhật ảnh</button></Row>
                        {/* card hovaten */}
                        <Row className='mt-3 card-profile'>
                              <div className='col-sm-4 text-card'> Họ và tên  </div>

                              <input className='col-sm-8 height-50 border-card' placeholder='Vui lòng điền thông tin đầy đủ' />
                              <div className='col-sm-12 text-card-1'> Vui lòng điền thông tin đầy đủ*</div>
                        </Row>

                        {/* Card so dien thoai */}
                        <Row className='mt-3 card-profile'>
                              <div className='col-sm-4 text-card'> Số điện thoại  </div>

                              <input className='col-sm-8 height-50 border-card' placeholder='039 **** ****' />
                              <div className='col-sm-12 text-card-1'> Số điện thoại không đúng*</div>
                        </Row>

                        {/* card mật khẩu */}
                        <Row className='mt-3 card-profile'>
                              <div className='col-sm-4 text-card'> Mật khẩu  </div>

                              <input className='col-sm-4 height-50 border-card' placeholder='*********' />
                              <button className='col-sm-3 button button-mat-khau'> Đổi mật khẩu</button>

                              <div className='col-sm-12 text-card-1'> Mật khẩu không đúng*</div>
                        </Row>

                        {/* card ngày sinh */}
                        <Row className='mt-3 card-profile'>
                              <div className='col-sm-4 text-card'> Ngày sinh  </div>

                              <div class="col-sm-8 input-group date">
                                    <input type="text" class="form-control border-card" value="12-02-2012" />
                                    <div class="input-group-addon">
                                          <span class="glyphicon glyphicon-th"></span>
                                    </div>
                              </div>
                        </Row>

                        {/* card giới tính*/}
                        <Row className='mt-3 card-profile'>
                              <div className='col-sm-4 text-card'> Giới tính  </div>

                              <div class='col-sm-3'>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                          <Form.Control as="select">
                                                <option>Nam</option>
                                                <option>Nữ</option>
                                          </Form.Control>
                                    </Form.Group>
                              </div>
                        </Row>

                        {/* card Địa chỉ */}
                        <Row className='mt-3 card-profile'>
                              <div className='col-sm-4 text-card'> Địa chỉ  </div>

                              <input className='col-sm-8 height-50 border-card' placeholder='Số nhà, đường, phường, quận, thành phố' />
                        </Row>

                        {/* card Email */}
                        <Row className='mt-3 card-profile'>
                              <div className='col-sm-4 text-card'> Email  </div>

                              <input className='col-sm-8 height-50 border-card' placeholder='abc@gmail.com' />
                        </Row>

                        {/* card cap nhat */}
                        <Row className='mt-4 '>
                              <button class="button col-sm-4 button-cap-nhat">Cập nhật</button>

                        </Row>

                  </div>
            );
      }
}

export default ProfileUserdetail;
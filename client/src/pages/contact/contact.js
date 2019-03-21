import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './contact.css'

class ContactPage extends Component {
  render() {
    return (
    	<div className="contact">
            <Container>
                <div className="map mt-5">
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <form>
                            <div className="text1">Hoặc để lại tin nhắn, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</div>
                            <div className="form-group">
                                <div className="mt-3">
                                    <input className="form-control" type="text" placeholder="Họ tên" />
                                </div>
                                <div className="mt-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Địa chỉ email" />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mô tả sản phẩm của bạn"></textarea>
                                </div>
                                <input className="btn btn-primary submitButton mt-2 mb-5" type="submit" value="SUBMIT" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                      <div className="text1">Liên lạc trực tiếp với chúng tôi tại:</div>
                      <div className="text2 mt-1">Công ty TNHH Thương mại Dịch vụ Nail Partner</div>
                      <div className="text1 mt-1">Địa chỉ:</div>
                      <div className="text1 mt-1">096 994 2689</div>
                      <div className="text1 mt-1">nail.system.2019@gmail.com</div>
                    </div>
                </div>
            </Container>
        </div>
    );
  }
}

export default ContactPage;

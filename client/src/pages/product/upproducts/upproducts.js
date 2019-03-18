import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './upproducts.css'

class upProductsPage extends Component {
  render() {
    return (
      <div className='uploadProduct'>
        <Container>
            <div className="row mt-5">
                <div className="col-md-3">
                </div>
                <div className="callText col-md-6 textSize1">
                    Đăng sản phẩm độc đáo theo phong cách riêng của bạn
                </div>
            </div>
            <div className='row mt-5'>
                <div className="col-md-1">
                </div>
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <input class="form-control" type="text" placeholder="Tên sản phẩm" />
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Tải sản phẩm lên...</label>
                        </div>
                        <div className="form-group mt-3">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Loại dịch vụ</option>
                                <option>Dịch vụ làm móng...</option>
                                <option>Dịch vụ khác...</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mô tả sản phẩm của bạn"></textarea>
                        </div>
                    </form>                    
                </div>
                <div className="col-md-6">
                    <div className="pictureView"></div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <input className="btn btn-primary saveButton" type="submit" value="LƯU"/>
                </div>
            </div>
        </Container>
    </div>
    );
  }
}

export default upProductsPage;
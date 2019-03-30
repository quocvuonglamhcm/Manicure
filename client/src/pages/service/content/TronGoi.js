import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ModalContainer from '../modal/modal';
// import TronGoiPopUp from '../ServicePopUp/TronGoiPopUp'

export default function TronGoi() {
  
  return (
    <React.Fragment>
      <Col sm={4} md={4} sx={4} >
        <Col sm={12} md={12} sx={12} className='box-service'>
          <div className="AnhTronGoi"></div>
          <div className="TitleService">Trọn gói cho tay hoặc chân</div>
          <Row >
            <Col sm={12} md={12} sx={12} >
              {/* {this.state.isDisplayLogin ? <TronGoiPopUp displayLogin={this.displayLogin} /> : null} */}
              <div id='square2' > Thông tin thêm</div>
            </Col>
            <Col sm={12} md={12} sx={12} >
              <Link to={'/nailer'}>
                <div id='square2'>Gợi ý thợ</div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Col>
    </React.Fragment>
  )
}
// }



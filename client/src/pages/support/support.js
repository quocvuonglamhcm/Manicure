import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap/'
import './support.css';

import datlich from '../../assets/images/ic_datlich.svg';
import kythuat from '../../assets/images/ic_.svg';
import taikhoan from '../../assets/images/ic_taikhoan.svg';
import tho from '../../assets/images/ic_tho.svg';

class SupportPage extends Component {
	state = {
		name: [
			'đặt lịch',
			'kỹ thuật',
			'tài khoản',
			'từ người thợ'
		]
	}
	render() {
		let ic_search = <FontAwesomeIcon className="ic-search " icon={faSearch} />
		return (
			<Container className='text-center mt-4' id="support">
				<Row >
					<Col>
						<div className='slo'>Xin chào, Nail Partner có thể giúp gì cho bạn?</div>
					</Col>
				</Row>
				<Row className="justify-content-center m-3">
					<Col sm={6}>
						<InputGroup className="mb-3" size='sm'>
							<FormControl className='form-input'
								placeholder="Bạn có thắc mắc gì về Nail Partner"
							/>
							<InputGroup.Append>
								<Button variant="outline-secondary">{ic_search}</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
				<Row>
					<Item data={this.state.name} />
				
				</Row>
				<Row className="m-4">
					<Col>
						<h3 className="mb-2">Liên hệ với chúng tôi!</h3>
						<Button variant="danger" className='p-3'>Trò chuyện ngay</Button>
					</Col>
				</Row>
			</Container >
		);
	}
}


const Item = (props) => {
	let data = props.data;
	let element = data.map((item, index) => {
		return (
			<Col key={index}>
				<div className='box-image'>
					<div className="image">
						<img src={datlich} />
						<div className="mn_text">{item}</div>
					</div>
				</div>
			</Col>
		)
	})
	console.log(element)
	return (
		element

	)
	
}
export default SupportPage;

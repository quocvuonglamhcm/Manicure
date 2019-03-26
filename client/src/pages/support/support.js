import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap/'
import './support.css';
import Card from 'react-bootstrap/Card'

import datlich from '../../assets/images/ic_datlich.svg';
import kythuat from '../../assets/images/ic_.svg';
import taikhoan from '../../assets/images/ic_taikhoan.svg';
import tho from '../../assets/images/ic_tho.svg';

class SupportPage extends Component {
	// state = {
	// 	name: [
	// 		{
	// 			name: 'Đặt lịch',
	// 			image: { datlich }
	// 		},
	// 		{
	// 			name: 'Kỹ thuật',
	// 			image: { kythuat }
	// 		},
	// 		{
	// 			name: 'Tài khoản',
	// 			image: { taikhoan }
	// 		},
	// 		{
	// 			name: 'Từ người thợ',
	// 			image: { tho }
	// 		}
	// 	]
	// 	// Image: [
	// 	// 	{datlich},
	// 	// 	{kythuat},
	// 	// 	{taikhoan},
	// 	// 	{tho}
	// 	// ]
	// }
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
					<Col sm={3}>
						<Card>
							<Card.Img variant="top" src={datlich}/>
							<Card.Body>
								<Card.Title>Đặt lịch</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={3}>
						<Card>
							<Card.Img variant="top" src={kythuat}/>
							<Card.Body>
								<Card.Title>Kỹ thuật</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={3}>
						<Card>
							<Card.Img variant="top" src={taikhoan}/>
							<Card.Body>
								<Card.Title>Tài khoản</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={3}>
						<Card>
							<Card.Img variant="top" src={tho}/>
							<Card.Body>
								<Card.Title>Từ người thợ</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className="m-4">
					<Col>
						<div className="mb-2 btn-slo">Liên hệ với chúng tôi!</div>
						<Button variant="danger" className='p-3 contact-btn'>Trò chuyện ngay</Button>
					</Col>
				</Row>
			</Container >
		);
	}
}


// const Item = (props) => {
// 	let data = props.data;
// 	let element = data.map((item, index) => {
// 		return (
// 			<Col key={index}>
// 				<div className='box-image'>
// 					<div className="image">
// 					{/* <img src={datlich} /> */}
// 						<div className="mn_text">{item}</div>
// 					</div>
// 				</div>
// 			</Col>
// 		)
// 	})
// 	console.log(element)
// 	return (
// 		element

// 	)

// }
export default SupportPage;

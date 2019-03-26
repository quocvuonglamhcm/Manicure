import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap/'
import './support.css';

import datlich from '../../assets/images/ic_datlich.svg';


class SupportPage extends Component {
	render() {
		let ic_search = <FontAwesomeIcon className="ic-search " icon={faSearch} />
		return (
			<Container className='text-center mt-4'>
				<Row >
					<Col>
						<h2>Xin chào, Nail Partner có thể giúp gì cho bạn?</h2>
					</Col>
				</Row>
				<Row className="justify-content-center m-3">
					<Col sm={6}>
						<InputGroup className="mb-3" size='sm'>
							<FormControl
								placeholder="Bạn có thắc mắc gì về Nail Partner"
							/>
							<InputGroup.Append>
								<Button variant="outline-secondary">{ic_search}</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
				<Row>
					<Item />
					<Item />
					<Item />
					<Item />
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


const Item = () => {
	return (
		<Col >
			<div className='box-image'>
				<div className="image">
					<img src={datlich} />
				<div className="mn_text">Đặt lịch</div>
				</div>
			</div>
		</Col>
	)
}
export default SupportPage;

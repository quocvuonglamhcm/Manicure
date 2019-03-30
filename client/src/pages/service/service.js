import React, { Component } from 'react';


import './service.css'

import Menu from './menu';
import Content from './content'


class ServicePage extends Component {
	state = {
		ListService : [
			'Trọn gói cho tay và chân',
			'Chăm sóc móng tay hoặc chân',
			'Đắp bột',
			'Đắp móng gel',
			'Vẽ trang trí',
			'Đính đá'
		],
		
	}
	render() {
		let {ListService} = this.state;
		return (
			<div id="main-service">
				<Menu data = {ListService}/>
				<Content />
			</div>
		);
	}
}

export default ServicePage;
import React, { Component } from 'react';


import './service.css'

import LeftContent from '../../components/ServiceDetail/leftContent/leftContent';
import RightContent from '../../components/ServiceDetail/rightContent/rightContent'


class ServicePage extends Component {
	state = {
		ListService : [
			'Trọn gói cho tay và chân',
			'Chăm sóc móng tay hoặc chân',
			'Đắp mặt',
			'Đắp móng gel',
			'Vẽ trang trí',
			'Đính đá'
		],
		
	}
	render() {
		let {ListService} = this.state;
		return (
			<div id="main-service">
				<LeftContent data = {ListService}/>
				<RightContent />
			</div>
		);
	}
}

export default ServicePage;
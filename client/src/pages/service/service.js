import React, { Component } from 'react';


import './service.css'

import LeftContent from '../../components/ServiceDetail/leftContent/leftContent';
import RightContent from '../../components/ServiceDetail/rightContent/rightContent'

// import ChamSocPopUp from '../../components/ServiceDetail/ChamSocPopUp';
// import DapBotPopUp from '../../components/ServiceDetail/DapBotPopUp';
// import DapGelPopUp from '../../components/ServiceDetail/DapGelPopUp';
// import DinhDaPopUp from '../../components/ServiceDetail/DinhDaPopUp';
// import TronGoiPopUp from '../../components/ServiceDetail/TronGoiPopUp';
// import VePopUp from '../../components/ServiceDetail/VePopUp';



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
	// showPopup = () => {
	// 	this.setState({
	// 		status: !this.state.status
	// 	})
	// 	console.log(this.state.status)
	// }
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
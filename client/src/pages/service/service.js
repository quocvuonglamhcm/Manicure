import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './service.css'

import ChamSocPopUp from '../../components/ServiceDetail/ChamSocPopUp';
import DapBotPopUp from '../../components/ServiceDetail/DapBotPopUp';
import DapGelPopUp from '../../components/ServiceDetail/DapGelPopUp';
import DinhDaPopUp from '../../components/ServiceDetail/DinhDaPopUp';
import TronGoiPopUp from '../../components/ServiceDetail/TronGoiPopUp';
import VePopUp from '../../components/ServiceDetail/VePopUp';



class ServicePage extends Component {
	state = {
		status: false
	}
	showPopup = () => {
		this.setState({
			status: !this.state.status
		})
		console.log(this.state.status)
	}
	render() {
		return (
			<div id="main-service">
				<div id="left-service">
					<div className="title1">Danh sách dịch vụ</div>
					<div className="text1">Trọn gói cho tay hoặc chân</div>
					<div className="text1">Chăm sóc móng tay hoặc chân</div>
					<div className="text1">Đắp bột</div>
					<div className="text1">Đắp móng gel</div>
					<div className="text1">Vẽ trang trí</div>
					<div className="text1">Đính đá</div>
				</div>
				<div id="right-service">
					<div className="title2">Danh sách dịch vụ</div>
					<Row>
						<Col sm={4} md={4} sx={4}>
							{this.state.status ? <TronGoiPopUp /> : null}
							<Col sm={12} md={12} sx={12}>
								<img width="100%" height="200px" src="https://muachungcdn.com/thumb_w/960,99/product/thumbnail/2017/06/26/0.734900001498475106.jpg" />
								<div className="text2">Trọn gói cho tay hoặc chân</div>
								<Row>
									<Col sm={7} md={7} sx={7}>
										<div id="square2" onClick={this.showPopup} >Thông tin thêm</div>
									</Col>
									<Col sm={5} md={5} sx={5}>
										<div id="square2">Gợi ý thợ</div>
									</Col>
								</Row>
							</Col>
						</Col>
						<Col sm={4} md={4} sx={4}>
						{this.state.status ? <ChamSocPopUp /> : null}
							<Col sm={12} md={12} sx={12}>
								<img width="100%" height="200px" src="https://s1.bloganchoi.com/wp-content/uploads/2016/08/anh-tieu-bieu-1.jpg" />
								<div className="text2">Chăm sóc móng tay hoặc chân</div>
								<Row>
									<Col sm={7} md={7} sx={7}>
										<div id="square2">Thông tin thêm</div>
									</Col>
									<Col sm={5} md={5} sx={5}>
										<a href="https://www.youtube.com/watch?v=mG7Nlq6ilqk" target="_blank"><div id="square2">Gợi ý thợ</div></a>
									</Col>
								</Row>
							</Col>
						</Col>
						<Col sm={4} md={4} sx={4}>
						{this.state.status ? <DapBotPopUp /> : null}
							<Col sm={12} md={12} sx={12}>
								<img width="100%" height="200px" src="http://dephiendai.vn/hinhanh/cac-mau-nail-tong-hong-dep-5952090c10294.jpeg" />
								<div className="text2">Đắp bột</div>
								<Row>
									<Col sm={7} md={7} sx={7}>
										<div id="square2" >Thông tin thêm</div>
									</Col>
									<Col sm={5} md={5} sx={5}>
										<div id="square2">Gợi ý thợ</div>
									</Col>
								</Row>
							</Col>
						</Col>
					</Row>
					<Row>
						<Col sm={4} md={4} sx={4}>
						{this.state.status ? <DapGelPopUp /> : null}
							<Col sm={12} md={12} sx={12}>
								<img width="100%" height="200px" src="http://newschoolsaigon.com/publicimages/photos/images/cac-mau-nail-dap-gel-1.jpg" />
								<div className="text2">Đắp móng gel</div>
								<Row>
									<Col sm={7} md={7} sx={7}>
										<div id="square2">Thông tin thêm</div>
									</Col>
									<Col sm={5} md={5} sx={5}>
										<a href="https://www.youtube.com/watch?v=mG7Nlq6ilqk" target="_blank"><div id="square2">Gợi ý thợ</div></a>
									</Col>
								</Row>
							</Col>
						</Col>
						<Col sm={4} md={4} sx={4}>
						{this.state.status ? <VePopUp /> : null}
							<Col sm={12} md={12} sx={12}>
								<img width="100%" height="200px" src="https://znews-photo.zadn.vn/w660/Uploaded/cqxrcajwp/2015_06_09/1.jpg" />
								<div className="text2">Vẽ trang trí</div>
								<Row>
									<Col sm={7} md={7} sx={7}>
										<div id="square2">Thông tin thêm</div>
									</Col>
									<Col sm={5} md={5} sx={5}>
										<a href="https://www.youtube.com/watch?v=mG7Nlq6ilqk" target="_blank"><div id="square2">Gợi ý thợ</div></a>
									</Col>
								</Row>
							</Col>
						</Col>
						<Col sm={4} md={4} sx={4}>
						{this.state.status ? <DinhDaPopUp /> : null}
							<Col sm={12} md={12} sx={12}>
								<img width="100%" height="200px" src="http://www.xaluan.com/images/news/Image/2018/04/19/75ad7f3ea971c0.img.jpg" />
								<div className="text2">Đính đá</div>
								<Row>
									<Col sm={7} md={7} sx={7}>
										<div id="square2">Thông tin thêm</div>
									</Col>
									<Col sm={5} md={5} sx={5}>
										<a href="https://www.youtube.com/watch?v=mG7Nlq6ilqk" target="_blank"><div id="square2">Gợi ý thợ</div></a>
									</Col>
								</Row>
							</Col>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default ServicePage;
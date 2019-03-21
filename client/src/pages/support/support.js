import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './support.css';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import ic_search_bar from '../../assets/images/ic_global_search_defaul.svg'
import datlich from '../../assets/images/ic_datlich.svg';
import kythuat from '../../assets/images/ic_.svg';
import taikhoan from '../../assets/images/ic_taikhoan.svg';
import tho from '../../assets/images/ic_tho.svg';
class SupportPage extends Component {
	// state = {
	// 	nameService:[
	// 		{
	// 			name:'đặt lịch',
	// 			image:''
	// 		},
	// 			{
	// 			name:'kỹ thuật',
	// 			image:''
	// 		},
	// 			{
	// 			name:'tài khoản',
	// 			image:''
	// 		},
	// 			{
	// 			name:'từ người thợ',
	// 			image:''
	// 		},
	// 	],
	// 	question:[
	// 		'Tại sao tôi chỉ có 30 phút để đặt mua vé ?',
	// 		'Tôi có được đặt lịch với nhiều thợ trong cùng một đơn giao dịch không ?',
	// 		'Tôi có được hủy lịch không ?'
	// 	]
	// }

	render() {
		let ic_search = <FontAwesomeIcon className="ic-search " icon={faSearch} />
		return (
				<div id="sp-main">
					<div className="sp-search-bar">
						<div className="par">
							Xin chào, Nail Partner có thể giúp gì cho bạn?
					</div>

						<div className="sp-input-form">
							<input type="search" className="input-text" placeholder="Bạn có thắc mắc gì về Nail Partner" />
							<button type="button" className="sp-button-search ic_search">
								{ic_search}
							</button>
						</div>
					</div>

					<div className="sp-menu" >
						<ul className="sp-menu_ul">
							<li>
								<div className="images">
									<img src={datlich} />
								</div>
								<div className="mn_text">
									Đặt lịch
							</div>
							</li>

							<li>
								<div className="images">
									<img src={kythuat} />
								</div>
								<div className="mn_text">
									Kỹ thuật
							</div>
							</li>

							<li>
								<div className="images">
									<img src={taikhoan} />
								</div>
								<div className="mn_text">
									Tài khoản
							</div>
							</li>

							<li>
								<div className="images">
									<img src={tho} />
								</div>
								<div className="mn_text">
									Từ người thợ
							</div>
							</li>

						</ul>
					</div>

					
					<div className="sp-chatbox sp-contact">
					<div className="sp-contact-slo">Liên hệ với chúng tôi!</div>
						<button type="button" className="sp-contact-button">Trò chuyện ngay</button>
					</div>
				</div>
		);
	}
}

export default SupportPage;

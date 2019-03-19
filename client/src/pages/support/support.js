import React, { Component } from 'react';
import './support.css';
class SupportPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			 nameService: [
        {
          name: "đặt lịch",
          image: ""
        },
        {
          name: "kỹ thuật",
          image: ""
        },
        {
          name: "tài khoản",
          image: ""
        },
        {
          name: "từ người thợ",
          image: ""
        }
      ]
		}
	}

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
  	var element = this.state.nameService.map((item ) => {
  		return <h1 key ={item+Math.random()}>{ item.name }</h1>
  	})

    return (
			<div id="sp_main">
				<div className="search-bar">
							<div className="par">
								Xin chào, Nail Partner có thể giúp gì cho bạn?
							</div>
							<div className="container">
								<span className="icon"><i className="fa fa-search"></i></span>
						<input className="input" type="search" placeholder="Bạn thắc mắc gì về Nail Partner ?"></input>
							</div>
				</div>

				<div className="menu" >
					<ul className="menu_ul">
						<li> 
								<div className="images">
										<img src="ic_datlich.svg"/>
								</div>
							<div className="mn_text">
								Đặt lịch
							</div>
						</li>

						<li> 
								<div className="images">
										<img  src="ic_.svg"/>
								</div>
							<div className="mn_text">
								Kỹ thuật
							</div>
						</li>

						<li> 
							<div className="images">
									<img src="ic_taikhoan.svg"/>
							</div>
							<div className="mn_text">
								Tài khoản
							</div>
						</li>

						<li> 
								<div className="images">
										<img src="ic_tho.svg"/>
								</div>
							<div className="mn_text">
								Từ người thợ
							</div>
						</li>

					</ul>
			</div>
			</div>
    );
  }
}

export default SupportPage;

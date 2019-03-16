import React, { Component } from 'react';

class SupportPage extends Component {
	state = {
		nameService:[
			{
				name:'đặt lịch',
				image:''
			},
				{
				name:'kỹ thuật',
				image:''
			},
				{
				name:'tài khoản',
				image:''
			},
				{
				name:'từ người thợ',
				image:''
			},
		],
		question:[
			'Tại sao tôi chỉ có 30 phút để đặt mua vé ?',
			'Tôi có được đặt lịch với nhiều thợ trong cùng một đơn giao dịch không ?',
			'Tôi có được hủy lịch không ?'
		]
	}

  render() {
    return (
    	<h1>Trang Ho tro</h1>
    );
  }
}

export default SupportPage;

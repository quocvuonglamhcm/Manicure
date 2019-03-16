import React, { Component } from 'react';

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
	// 	,
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
    	<div>
    		{ element }
    	</div>
    );
  }
}

export default SupportPage;

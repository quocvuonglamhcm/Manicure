import React, { Component } from 'react';
import './header.css'

class HeaderComponents extends Component {
  render() {
    return (
      <div className="header">
      	<ul>
      		<li>Trang chủ</li>
      		<li>Giới thiệu</li>
      		<li>Dịch vụ</li>
      		<li>Tác phẩm</li>
      		<li>Thợ Nail</li>
      		<li>Trợ Giúp</li>
      		<li>Liên Hệ</li>
      	</ul>
      </div>
    );
  }
}

export default HeaderComponents;
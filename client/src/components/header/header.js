import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="header">
          <div className="navbar2">
            <ul>
              <li>
                <a href='tel:084391239123'>
                  &#9990; +84 39123 9123
                </a>
              </li>
              <li>
                <a href='mailto: nail.system.2019@gmail.com'>
                  &#9993; nail.system.2019@gmail.com
                </a>
							</li>
							<li>Đăng ký/Đăng nhập</li>
							<li> VI | EN</li>
							<li> <input type='text' className='search' /></li>

						</ul>
					</div>
					<div className="navbar justify-content-end">
						<ul>
							<li> <Link to='/' className="whiteColor"> TRANG CHỦ </Link> </li>
							<li> <Link to='/about' className="whiteColor"> GIỚI THIỆU </Link> </li>
							<li> <Link to='/service' className="whiteColor"> DỊCH VỤ </Link> </li>
							<li> <Link to='/nailer' className="whiteColor">THỢ NAIL</Link></li>
							<li> <Link to='/product/123' className="whiteColor">TÁC PHẨM</Link></li>
							<li> <Link to='/support' className="whiteColor">TRỢ GIÚP</Link></li>
							<li> <Link to='/contact' className="whiteColor"> LIÊN HỆ </Link> </li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default HeaderComponent;

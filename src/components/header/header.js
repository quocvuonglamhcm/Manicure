import React, { Component } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

class HeaderComponents extends Component {
  render() {
    return (
      <div className="header">
      	<ul>
      		<li> <Link to='/'> Home </Link></li>
      		<li> <Link to='/about'> About </Link></li>
      		<li> <Link to='/service'> Service </Link></li>
          <li> <Link to='/contact'> Contact </Link></li>
          <li> <Link to='/workers'> Workers </Link></li>
          <li> <Link to='/products'> Products </Link></li>
      	</ul>
      </div>
    );
  }
}

export default HeaderComponents;
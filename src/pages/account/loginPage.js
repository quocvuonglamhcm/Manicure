import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './login.css'

import Login from '../../components/login/login';

export default class LoginPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			key: 'home',
		};
	}

	render() {
		return (
			<div className="overlay">
				<div className='login__box'>
					<Tabs
						activeKey={this.state.key}
						onSelect={key => this.setState({ key })}
					>
						<Tab eventKey="home" title="Đăng nhập">
							<Login />
						</Tab>
						<Tab eventKey="profile" title="Đăng ký">
							<Login />
						</Tab>
						
					</Tabs>
				</div>
			</div>
		)
	}
}
import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner';
import LoiIch from '../../components/loiich/loiich';

const HomePage = () => (
	<div>
		<Banner />
		<div className='container'>
			<div className='register-title'>
			</div>
		</div>
		<LoiIch/>
	</div>
)

export default HomePage

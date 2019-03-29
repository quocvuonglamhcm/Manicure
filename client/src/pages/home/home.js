import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner'
import ProfileUserdetail from '../../components/profileuserdetail/profileuserdetail';
const HomePage = () => (
	<div>
		<Banner />
		<div className='container'>
			<div className='register-title'>
			</div>
			<div className='body-loi-ich'>
				<ProfileUserdetail />
			</div>
		</div>
	</div>
)

export default HomePage

import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner'
import Bodyloiich from '../../components/body-loi-ich/body-loi-ich'
const HomePage = () => (
	<div>
		<Banner />
		<div className='container'>
			<div className='register-title'>
				<div className='body-loi-ich'>
						<Bodyloiich/>
				</div>
			</div>
		</div>
	</div>
)

export default HomePage

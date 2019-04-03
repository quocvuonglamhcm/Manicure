import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner';
import LoiIch from '../../components/loiich/loiich';
import DownloadApp from '../../components/download/download'
import UseApp from '../../components/useapp/useapp'
import Testimonials from '../../components/testimonials/Testimonials';
const HomePage = () => (
	<div>
		<Banner />
		<div className='container'>
			<div className='register-title'>
			</div>
		</div>
		<LoiIch/>
		<DownloadApp/>
		<UseApp/>
		<Testimonials/>
	</div>
)

export default HomePage

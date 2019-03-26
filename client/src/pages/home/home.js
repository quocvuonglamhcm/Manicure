import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner';
import LoiIch from '../../components/loiich/loiich';
import DownloadApp from '../../components/download/download'

const HomePage = () => (
	<div>
		<Banner />
		<div className='container'>
			<div className='register-title'>
			</div>
		</div>
		<LoiIch/>
		<DownloadApp/>
	</div>
)

export default HomePage

import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner'
import Bodyloiich from '../../components/body-loi-ich/body-loi-ich'
import CapnhatthongtinkhachhangComponent from '../../components/cap-nhat-thong-tin-khach-hang/cap-nhat-thong-tin-khach-hang'
const HomePage = () => (
	<div>
		<Banner />
		<div className='container'>
			<div className='register-title'>
				<div className='body-loi-ich'>
						<Bodyloiich/>
				</div>

				<div className='cap-nhat-thong-tin-khach-hang'>
					<CapnhatthongtinkhachhangComponent />
				</div>
			</div>
		</div>
	</div>
)

export default HomePage

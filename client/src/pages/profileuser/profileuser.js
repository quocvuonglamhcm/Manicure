import React from 'react'
import Banner from '../../components/Banner/banner'
import ProfileUserdetail from '../../components/profileuserdetail/profileuserdetail'
const ProfileUser = () => (
	<div>
		<Banner />
		<div className='container'>
			<div className='register-title'>
			</div>

            <div className='main-profile-user'>
				<ProfileUserdetail />
			</div>
		</div>
	</div>
)

export default ProfileUser

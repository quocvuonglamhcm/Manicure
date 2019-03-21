import React, { Component } from 'react';
import ProfileUserdetail from '../../components/profileuserdetail/profileuserdetail';
import './profileuser.css';

class ProfileUser extends Component {
    render() {
        return (
            <div id='main-profile-user'>
            <ProfileUserdetail />
            </div>
        );
      }
}

export default ProfileUser
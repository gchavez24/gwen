// src/components/Profile.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import Navbar from './Navbar';
import '../css/ProfilePicture.css';


function Profile() {
  return (
    <div>
      <Navbar />
      <ProfilePicture />
      <h1 className="profile">Gwen Vandenhoeck</h1>
      <ProfileDetails />
    </div>
  );
}

export default Profile;


import React, { useState } from 'react';
import DashboardSidebar from '../../../Components/Dashboard/FreighterDashboard';
import Input from '../../../Components/Input/Input';
import './UserProfile.css'; // Bu dosyayı oluşturmanız gerekecek

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    userEmail: '',
    userPhoneNumber: ''
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleProfileInputChange = (event) => {
    const { name, value } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handlePasswordInputChange = (event) => {
    const { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleProfileSubmit = (event) => {
    event.preventDefault();
    console.log('User profile updated:', userProfile);
    setIsEditingProfile(false);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    console.log('Password updated:', passwords);
    setIsEditingPassword(false);
  };

  return (
      
      <div className="user-profile-page-container">
        <DashboardSidebar />
        <main className="user-profile-page-content">
          {/* User Profile Update Form */}
          <div className="user-profile-update">
            <h1>User Profile</h1>
            <form onSubmit={handleProfileSubmit} className={isEditingProfile ? 'active' : ''}>
              <Input
                label="Email"
                name="userEmail"
                value={userProfile.userEmail}
                onChange={handleProfileInputChange}
                disabled={!isEditingProfile}
              />
              <Input
                label="Phone Number"
                name="userPhoneNumber"
                value={userProfile.userPhoneNumber}
                onChange={handleProfileInputChange}
                disabled={!isEditingProfile}
              />
              <div className="form-actions">
                {isEditingProfile ? (
                  <>
                    <button type="button" onClick={() => setIsEditingProfile(false)}>Cancel</button>
                    <button type="submit">Save</button>
                  </>
                ) : (
                  <button type="button" onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
                )}
              </div>
            </form>
          </div>
          
          {/* Change Password Form */}
          <div className="change-password">
            <h1>Change Password</h1>
            <form onSubmit={handlePasswordSubmit} className={isEditingPassword ? 'active' : ''}>
              <Input
                type="password"
                label="Current Password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordInputChange}
              />
              <Input
                type="password"
                label="New Password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordInputChange}
              />
              <Input
                type="password"
                label="Confirm New Password"
                name="confirmNewPassword"
                value={passwords.confirmNewPassword}
                onChange={handlePasswordInputChange}
              />
              <div className="form-actions">
                {isEditingPassword ? (
                  <>
                    <button type="button" onClick={() => setIsEditingPassword(false)}>Cancel</button>
                    <button type="submit">Change</button>
                  </>
                ) : (
                  <button type="button" onClick={() => setIsEditingPassword(true)}>Edit Password</button>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
  );
};

export default UserProfile;

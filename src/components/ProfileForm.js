import React, { useState } from 'react';
import '../index.css';

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      <h2>Profile Information</h2>
      <form>
        <div className="profile-image-section">
          <div className="profile-image">
            {profileImage ? (
              <img src={profileImage} alt="Profile" />
            ) : (
              <span>Tap Here To Update</span>
            )}
          </div>
          <input  type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter phone number" required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Enter address" required />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="Enter city" required />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" placeholder="Enter state" required />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input type="text" placeholder="Enter zip code" required />
        </div>
        
        <div className="form-actions">
          <button type="reset" className="cancel">Cancel</button>
          <button type="submit" className="update">Update</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;

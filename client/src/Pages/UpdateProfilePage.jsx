// UpdateProfilePage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../redux/user/userSlice';

const UpdateProfilePage = ({ currentUser }) => {
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: '', // Initialize with empty string or default value
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;

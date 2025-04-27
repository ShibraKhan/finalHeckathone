import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import API from '../services/axiosInstance';

const LoginPage = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // 👈 Add this

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/login', userData);
      console.log(res.data);
      navigate('/home'); // 👈 After successful login, go to Home
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" value={userData.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={userData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;

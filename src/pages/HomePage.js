import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Task Manager App</h1> {/* Yeh text visible hona chahiye */}
      <p>Manage your tasks efficiently with your team!</p>
      
      <div className="buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default HomePage;


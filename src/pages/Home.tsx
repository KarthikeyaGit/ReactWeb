// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token on logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className='main vw-100 vh-100'>
      <h2>Home</h2>
      <p>Welcome! You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

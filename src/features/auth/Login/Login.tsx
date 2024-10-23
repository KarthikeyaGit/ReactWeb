import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../provider/ThemeProvider'; // Adjust the import path
import '../style.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    // Mock authentication
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('authToken', 'mockToken'); // Save token
      navigate('/home'); // Redirect to Home after login
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); // Redirect to Signup page
  };

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${theme}`}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="usernameHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="passwordHelp"
            />
          </div>
          <button className="btn btn-primary mt-3 w-100" onClick={handleLogin}>
            Login
          </button>
          <div className="text-center mt-3">
            <span>Create New Account?</span>
            <span className="ms-2 btn-link" onClick={handleSignupRedirect}>
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

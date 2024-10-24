import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../provider/ThemeProvider'; // Adjust the import path
import '../style.scss'; // Ensure you have the correct styles

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>(''); // New state for email
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>(''); // New state for confirm password
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock signup logic
    console.log('User registered:', { username, email, password });
    navigate('/login'); // Redirect to login after successful signup
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to Login page
  };

  return (
    <div className={`main d-flex justify-content-center align-items-center vh-100 ${theme}`}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Signup</h2>
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-describedby="confirmPasswordHelp"
            />
          </div>
          <button className="btn btn-primary mt-3 w-100" onClick={handleSignup}>
            Sign Up
          </button>
          <div className="text-center mt-3" style={{fontSize: '0.9rem'}}>
            <span>Already have an account? </span>
            <span className="ms-2 btn-link" onClick={handleLoginRedirect}>
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

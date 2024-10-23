// src/routes/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const isAuthenticated = (): boolean => {
  // Mock authentication; replace with actual authentication logic
  return !!localStorage.getItem('authToken'); // Example: checking if a token exists
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

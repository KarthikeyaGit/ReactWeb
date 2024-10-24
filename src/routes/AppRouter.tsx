// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login/Login';
import Signup from '../pages/auth/Signup/Signup';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

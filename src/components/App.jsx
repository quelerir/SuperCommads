import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './Auth/SignUpPage';
import LoginPage from './Auth/LoginPage';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

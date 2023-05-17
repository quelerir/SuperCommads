import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBookPage from './addbook/AddBookPage';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/addbook" element={<AddBookPage />} />
      </Routes>
    </div>
  );
}

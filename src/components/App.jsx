import { Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './ui/NavBar';
import CabinetPage from './cabinet/CabinetPage';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/cabinet" element={<CabinetPage />} />
      </Routes>
    </div>
  );
}

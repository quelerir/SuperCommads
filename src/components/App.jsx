import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import CabinetPage from './cabinet/CabinetPage';
import Mainpage from './mainpage/mainpage';
import Bookpage from './mainpage/bookpage';

export default function App({allbooks, book }) {
  return (
    <div>
      <NavBar />
      <Routes>
    app
        <Route path="/" element={<Mainpage allbooks={allbooks} />} />
        <Route path="/:id" element={<Bookpage book={book} />} />
        <Route path="/cabinet" element={<CabinetPage />} />
        <Route path="/addbook" element={<AddBookPage />} />
      </Routes>
    </div>
  );
}

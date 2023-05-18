import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import CabinetPage from './cabinet/CabinetPage';
import Mainpage from './mainpage/mainpage';
import Bookpage from './mainpage/bookpage';
import AddBookPage from './addbook/AddBookPage';

export default function App({ allbooks, book }) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/books" element={<Mainpage allbooks={allbooks} />} />
        <Route path="books/:id" element={<Bookpage book={book} />} />
        <Route path="/addbook" element={<AddBookPage />} />
        <Route path="/cabinet" element={<CabinetPage />} />
      </Routes>
    </div>
  );
}

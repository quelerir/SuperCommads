import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './mainpage/mainpage';
import Bookpage from './mainpage/bookpage';

export default function App({ allbooks, book }) {
  return (
    <>
      {' '}
      <Routes>
        <Route path="/" element={<Mainpage allbooks={allbooks} />} />
        <Route path="/:id" element={<Bookpage book={book} />} />
      </Routes>

    </>
  );
}

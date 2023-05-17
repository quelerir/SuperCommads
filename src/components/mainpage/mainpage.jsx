import React, { useState } from 'react';
import Bookcard from './bookcard';

export default function Mainpage({ allbooks }) {
  const [books, setBooks] = useState(allbooks);

  return (
    <div className="row justify-content-evenly wrapper">
      {books.map((book) => (
        <Bookcard key={book.id} book={book} />
      ))}
    </div>
  );
}

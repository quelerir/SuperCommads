import React, { useState } from 'react';
import axios from 'axios';
import Bookcard from './bookcard';

export default function Mainpage({ allbooks, user }) {
  const [books, setBooks] = useState(allbooks);

  const deleteHandler = async (bookId) => {
    const response = await axios.delete(`/bookdelete/${bookId}`, {});
    if (response.status === 200) {
      setBooks(books.filter((book) => book.id !== bookId));
    }
  };

  return (
    <div className="row justify-content-evenly wrapper">
      {books.map((book) => (
        <Bookcard
          key={book.id}
          deleteHandler={deleteHandler}
          book={book}
          user={user}
        />
      ))}
    </div>
  );
}

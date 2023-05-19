import React from 'react';

export default function OneSearch({ searchBook }) {
  return (
    <li className="list-group-item">
      <img className="img-search" src={searchBook.img} alt="" />
      <a href={`/books/${searchBook.id}`}>{searchBook.bookname}</a>
    </li>
  );
}

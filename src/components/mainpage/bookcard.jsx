import React from 'react';

export default function Bookcard({ book }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <a href={`/books/${book.id}`}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={book.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <p className="text-muted">
                  Название: <br />
                  {book.bookname}
                </p>
                <p className="text-muted">
                  Автор: <br />
                  {book.author}
                </p>
              </h5>
              <p className="card-text">{book.bookannotation}</p>
              <p className="card-text">
                <small className="text-body-secondary" />
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

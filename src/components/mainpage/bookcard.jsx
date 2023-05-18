import React from 'react';

export default function Bookcard({ book }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={book.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <a href={book.id} className="text-muted">
                {book.bookname}
                {book.author}
              </a>
            </h5>
            <p className="card-text">{book.bookannotation}</p>
            <p className="card-text"><small className="text-body-secondary" /></p>
            {/* <button type="button" className="btn btn-success">Success</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function OneFavoriteBook({ favorite }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <a href={`/books/${favorite.id}`}>
            <img
              style={{
                marginTop: '20px',
                width: '500px',
                height: '250px',
                marginBottom: '20px',
              }}
              src={favorite.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </a>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <p className="text-muted">
                Название: <br />
                {favorite.bookname}
              </p>
              <p className="text-muted">
                Автор: <br />
                {favorite.author}
              </p>
            </h5>
            <p className="card-text">{favorite.bookannotation}</p>
            <p className="card-text">
              <small className="text-body-secondary" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

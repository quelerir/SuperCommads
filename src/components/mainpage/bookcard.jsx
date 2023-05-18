import React from 'react';
import axios from 'axios';

export default function Bookcard({ book, user }) {
  const submitRating = async (e) => {
    const ratingvalue = e.target.value;
    await axios.post(`/api/rating/${book.id}`, { ratingvalue });
  };
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <a href={`/books/${book.id}`}>
            <img src={book.img} className="img-fluid rounded-start" alt="..." />
          </a>
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
          {user && (
            <div>
              <div className="rating-area">
                <input
                  onChange={submitRating}
                  type="radio"
                  id={`${book.id}-5`}
                  name="ratingvalue"
                  value="5"
                />
                <label htmlFor={`${book.id}-5`} title="Оценка «5»" />
                <input
                  onChange={submitRating}
                  type="radio"
                  id={`${book.id}-4`}
                  name="ratingvalue"
                  value="4"
                />
                <label htmlFor={`${book.id}-4`} title="Оценка «4»" />
                <input
                  onChange={submitRating}
                  type="radio"
                  id={`${book.id}-3`}
                  name="ratingvalue"
                  value="3"
                />
                <label htmlFor={`${book.id}-3`} title="Оценка «3»" />
                <input
                  onChange={submitRating}
                  type="radio"
                  id={`${book.id}-2`}
                  name="ratingvalue"
                  value="2"
                />
                <label htmlFor={`${book.id}-2`} title="Оценка «2»" />
                <input
                  onChange={submitRating}
                  type="radio"
                  id={`${book.id}-1`}
                  name="ratingvalue"
                  value="1"
                />
                <label htmlFor={`${book.id}-1`} title="Оценка «1»" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

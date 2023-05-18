import React, { useState } from 'react';

export default function Bookpage({ book }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '1100px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={book.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Название:
                <br />
                {book.bookname}
              </h5>
              <h5 className="card-title">
                Автор: <br />
                {book.author}
              </h5>
              <p className="card-text">{book.bookannotation}</p>
            </div>
            <div>
              <button
                onClick={() => setShowComments(!showComments)}
                type="button"
              >
                Оставить коментарий
              </button>
            </div>
            {showComments && (
              <div>
                <form>
                  <input type="text" placeholder="Коментарий" />
                  <button type="submit">Добавить</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>Коментарии:</div>
    </div>
  );
}

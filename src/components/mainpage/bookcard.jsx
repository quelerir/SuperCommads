import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Bookcard({ book, user, deleteHandler }) {
  const [showLike, setShowLike] = useState(false);

  useEffect(() => {
    const storedLikeStatus = localStorage.getItem(`booklike-${book.id}`);
    setShowLike(storedLikeStatus === "true");
  }, [book.id]);

  const submitLike = async (e) => {
    const newLikeStatus = !showLike;
    setShowLike(newLikeStatus);
    localStorage.setItem(`booklike-${book.id}`, newLikeStatus.toString());
    e.preventDefault();
    await axios.post(`/cabinet/${book.id}`);
  };

  const submitRating = async (e) => {
    const ratingvalue = e.target.value;
    await axios.post(`/api/rating/${book.id}`, { ratingvalue });
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
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
            <div className="card border-secondary mb-3">
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
              {!showLike && (
                <div>
                  <svg
                    onClick={submitLike}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                    />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  </svg>
                </div>
              )}
              {showLike && (
                <div>
                  <svg
                    onClick={submitLike}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                  </svg>
                </div>
              )}
              <div>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => deleteHandler(book.id)}
                  type="button"
                >
                  Удалить книгу
                </button>
              </div>
            </div>
          )}
          {user && !showLike && (
            <div>
              <svg
                onClick={submitLike}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bookmark-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </div>
          )}
          {user && showLike && (
            <div>
              <svg
                onClick={submitLike}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bookmark-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
              </svg>
            </div>
          )}
        </div>
        <div>
          {user && (
            <button onClick={() => deleteHandler(book.id)} type="button">
              удалить книгу
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

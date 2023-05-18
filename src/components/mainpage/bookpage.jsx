import axios from 'axios';
import React, { useState } from 'react';
import CommentList from '../Comments/CommentList';

export default function Bookpage({ book, comments, average }) {
  const [showComments, setShowComments] = useState(false);
  const [allComensts, setAllComments] = useState(comments);

  const deleteHandler = async (commentId) => {
    const response = await axios.delete(`/api/comments/${commentId}`, {});
    if (response.status === 200) {
      setAllComments(allComensts.filter((comment) => comment.id !== commentId));
    }
  };
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '1100px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={book.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Название: {book.bookname}</h5>
              <h5 className="card-title">Рейтинг: {average}</h5>
              <h5 className="card-title">Автор: {book.author}</h5>
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
      {allComensts?.map((comment) => (
        <CommentList key={comments.id} setAllComments={setAllComments} comment={comment} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
}

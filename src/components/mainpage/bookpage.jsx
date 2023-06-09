import axios from 'axios';
import React, { useState } from 'react';
import CommentList from '../Comments/CommentList';

export default function Bookpage({ book, comments, average, user }) {
  const [showComments, setShowComments] = useState(false);
  const [allComensts, setAllComments] = useState(comments);

  const [input, setInput] = useState({
    commentbody: '',
  });

  const addHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setShowComments(!showComments);
    const response = await axios.post(`/api/addcommets/${book.id}`, input);
    console.log(response);
    setAllComments((prev) => [response.data, ...prev]);
    setInput({ commentbody: '' });
  };

  const deleteHandler = async (commentId) => {
    const response = await axios.delete(`/api/comments/${commentId}`, {});
    if (response.status === 200) {
      setAllComments(allComensts.filter((comment) => comment.id !== commentId));
    }
  };
  return (
    <div className="card-login">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <img
              style={{ width: '200px', height: '300px' }}
              src={book.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Название:
                {book.bookname}
              </h5>
              <h5 className="card-title">
                Рейтинг:
                {average}
              </h5>
              <h5 className="card-title">
                Автор:
                {book.author}
              </h5>
              <p className="card-text">{book.bookannotation}</p>
            </div>
            <div style={{ marginLeft: '17px', marginTop: '10px' }}>
              {user?.id && (
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setShowComments(!showComments)}
                  type="button"
                >
                  Оставить коментарий
                </button>
              )}
            </div>
            {showComments && (
              <div style={{ marginLeft: '17px', marginTop: '10px' }}>
                <form onSubmit={(event) => submitHandler(event)}>
                  <input
                    style={{ width: '192px' }}
                    name="commentbody"
                    className="form-control"
                    type="text"
                    placeholder="Комментарий"
                    value={input.commentbody}
                    onChange={addHandler}
                  />
                  <button
                    style={{ marginTop: '10px' }}
                    className="btn btn-outline-secondary"
                    type="submit"
                  >
                    Добавить
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <h5>Коментарии:</h5>
      {allComensts?.map((comment) => (
        <CommentList
          key={comment.id}
          setAllComments={setAllComments}
          comment={comment}
          deleteHandler={deleteHandler}
          user={user}
        />
      ))}
    </div>
  );
}

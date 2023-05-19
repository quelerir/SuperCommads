import React, { useState } from 'react';
import axios from 'axios';

export default function CommentList({
  comment,
  deleteHandler,
  setAllComments,
  user,
}) {
  const [showEdit, setShowEdit] = useState(false);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const commentbody = e.target.elements.commentbody.value;
    const response = await axios.patch(`/api/comments/${comment.id}`, {
      commentbody,
    });
    setShowEdit(!showEdit);
    const res = response.data;
    setAllComments((prev) =>
      prev.map((el) => {
        if (el.id === res.id) {
          return res;
        }
        return el;
      })
    );
  };
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">{comment?.User?.username}</div>
      <div className="card-body">
        <p className="card-text">{comment.commentbody}</p>
      </div>

      <div className="control-icons">
        {user?.id === comment.user_id && (
          <>
            <button
              onClick={() => setShowEdit(!showEdit)}
              type="button"
              className="btn btn-outline-secondary comment-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </button>

            <button
              onClick={() => deleteHandler(comment.id)}
              type="button"
              className="btn btn-outline-secondary "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </>
        )}
      </div>

      {showEdit && (
        <form onSubmit={addCommentHandler}>
          <input
            name="commentbody"
            type="text"
            className="form-control"
            defaultValue={comment.commentbody}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Edit
          </button>
        </form>
      )}
    </div>
  );
}

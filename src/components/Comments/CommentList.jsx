import React, { useState } from 'react';
import axios from 'axios';

export default function CommentList({
  comment,
  deleteHandler,
  setAllComments,
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
    <div className="card-body">
      <p className="card-text">
        <small className="text-muted">By username</small>
      </p>
      <p onClick={() => setShowEdit(!showEdit)} className="card-text">
        {comment.commentbody}
      </p>
      <svg
        onClick={() => deleteHandler(comment.id)}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-x-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
      <div>
        {showEdit && (
          <form onSubmit={addCommentHandler}>
            <input
              name="commentbody"
              type="text"
              defaultValue={comment.commentbody}
            />
            <button type="submit">Edit</button>
          </form>
        )}
      </div>
    </div>
  );
}

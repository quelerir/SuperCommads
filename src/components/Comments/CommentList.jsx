import React from 'react';
import axios from 'axios';

export default function CommentList({ comment, deleteHandler, setAllComments }) {
  const addCommentHandler = async (e) => {
    e.preventDefault();
    const commentbody = e.target.elements.commentbody.value;
    const response = await axios.patch(`/api/comments/${comment.id}`, {
      commentbody,
    });
    const res = response.data;
    console.log(res);
    setAllComments((prev) => prev.map((el) => {
      if (el.id === res.id) {
        return res;
      }
      return el;
    }));
  };
  return (
    <div>
      <form onSubmit={addCommentHandler}>
        <input name="commentbody" type="text" defaultValue={comment.commentbody} />
        <button type="submit">Edit</button>
      </form>
      <div>{comment.commentbody}</div>
      <button onClick={() => deleteHandler(comment.id)}>Delete</button>
    </div>
  );
}

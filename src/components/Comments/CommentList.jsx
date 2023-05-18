import React from 'react';

export default function CommentList({ comment, deleteHandler }) {
  // console.log(comment);
  return (
    <div>
      <div>{comment.commentbody}</div>
      <button onClick={() => deleteHandler(comment.id)}>Delete</button>
    </div>
  );
}

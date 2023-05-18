import React from "react";

export default function CommentList({ comment, deleteHandler }) {
  return (
    <div>
      <div>{comment.commentbody}</div>
      <button onClick={() => deleteHandler(comment.id)}>Delete</button>
    </div>
  );
}

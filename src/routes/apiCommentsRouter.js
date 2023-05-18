import express from 'express';
import { Comment } from '../../db/models';

const apiCommentsRouter = express.Router();

apiCommentsRouter.post('/addcommets/:id', async (req, res) => {
  const { id } = req.params;
  const { commentbody } = req.body;
  await Comment.create({
    commentbody,
    book_id: id,
    user_id: req.session?.user?.id,
  });
  res.sendStatus(200);
});

export default apiCommentsRouter;

import express from 'express';
import { Comment } from '../../db/models';

const router = express.Router();

router.post('/addcommets/:id', async (req, res) => {
  const { id } = req.params;
  const { commentbody } = req.body;
  const comm = await Comment.create({
    commentbody,
    book_id: id,
    user_id: req.session?.user?.id,
  });
  res.json(comm);
});

router.delete('/comments/:id', async (req, res) => {
  const { id } = req.params;
  await Comment.destroy({ where: { id } });
  res.sendStatus(200);
});

export default router;

import express from 'express';
import { Comment } from '../../db/models';
import { checkUser } from '../middlewares';

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
router.patch('/comments/:id', checkUser, async (req, res) => {
  const { id } = req.params;
  const { commentbody } = req.body;
  await Comment.update({ commentbody }, { where: { id } });
  const data = await Comment.findByPk(req.params.id);
  res.json(data);
});

router.delete('/comments/:id', checkUser, async (req, res) => {
  const { id } = req.params;
  await Comment.destroy({ where: { id } });
  res.sendStatus(200);
});

export default router;

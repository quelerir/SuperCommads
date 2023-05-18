import express from 'express';
import { Comment } from '../../db/models';

const router = express.Router();

router.patch('/comments/:id', async (req, res) => {
  const { id } = req.params;
  const { commentbody } = req.body;
  await Comment.update({ commentbody }, { where: { id } });
  const data = await Comment.findByPk(req.params.id);
  res.json(data);
});

router.delete('/comments/:id', async (req, res) => {
  const { id } = req.params;
  await Comment.destroy({ where: { id } });
  res.sendStatus(200);
});
module.exports = router;

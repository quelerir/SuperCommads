import express from 'express';
import { checkUser } from '../middlewares';
import { Comment, User } from '../../db/models';

const router = express.Router();

router.post('/addcommets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { commentbody } = req.body;
    const comm = await Comment.create({
      commentbody,
      book_id: id,
      user_id: req.session?.user?.id,
    });

    const user = await User.findByPk(req.session?.user?.id);

    res.json({
      ...comm.toJSON(),
      User: user,
    });
  } catch (e) {
    console.log(e);
  }
});
router.patch('/comments/:id', checkUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { commentbody } = req.body;
    await Comment.update({ commentbody }, { where: { id } });
    const data = await Comment.findByPk(req.params.id);
    const user = await User.findByPk(req.session?.user?.id);
    res.json({
      ...data.toJSON(),
      User: user,
    });
  } catch (e) {
    console.log(e);
  }
});

router.delete('/comments/:id', checkUser, async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

export default router;

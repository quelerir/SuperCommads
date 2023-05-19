import express from 'express';
import { Book } from '../../db/models';

const addbookRouter = express.Router();

addbookRouter.get('/addbook', (req, res) => {
  try {
    const initState = {};
    res.render('Layout', initState);
  } catch (e) {
    console.log(e);
  }
});

addbookRouter.post('/addbook', async (req, res) => {
  try {
    const { id } = req.session.user;
    const { bookname, author, bookannotation, img } = req.body;
    await Book.create({
      bookname,
      author,
      bookannotation,
      img,
      user_id: id,
    });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

export default addbookRouter;

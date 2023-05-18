import express from 'express';
import { Book } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  try {
    const allbooks = await Book.findAll();
    const initState = { allbooks };
    res.render('Layout', initState);
  } catch (e) {
    console.log(e);
  }
});
indexRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    const initState = { book };
    res.render('Layout', initState);
  } catch (e) {
    console.log(e);
  }
});

indexRouter.get('/signup', (req, res) => {
  try {
    res.render('Layout', {});
  } catch (e) {
    console.log(e);
  }
});

indexRouter.get('/login', (req, res) => {
  try {
    res.render('Layout', {});
  } catch (e) {
    console.log(e);
  }
});

export default indexRouter;

import express from 'express';
import { Favorite } from '../../db/models';

const cabinetRouter = express.Router();

cabinetRouter.get('/', async (req, res) => {
  try {
    await Favorite.findAll();
    res.render('Layout', {});
  } catch (e) {
    console.log(e);
  }
});

export default cabinetRouter;

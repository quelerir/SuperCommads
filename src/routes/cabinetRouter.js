import express from 'express';
import { Favorite } from '../../db/models';

const cabinetRouter = express.Router();

cabinetRouter.get('/', async (req, res) => {
  try {
    const CabinetFavorites = await Favorite.findAll({ where: { user_id: 1 } });
    console.log(CabinetFavorites);
    res.render('Layout', {});
  } catch (e) {
    console.log(e);
  }
});

export default cabinetRouter;

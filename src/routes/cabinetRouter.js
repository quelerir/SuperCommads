import express from 'express';
import { Favorite, Book } from '../../db/models';

const cabinetRouter = express.Router();

cabinetRouter.get('/', async (req, res) => {
  try {
    const { id } = req.session.user;
    const allFavorites = await Favorite.findAll({ where: { user_id: id } });
    const favoriteBooks = [];

    for (const favorite of allFavorites) {
      const book = await Book.findOne({ where: { id: favorite.book_id } });
      if (book) {
        favoriteBooks.push(book);
      }
    }
    res.render('Layout', { favoriteBooks });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

cabinetRouter.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.session.user.id;
    const favorite = await Favorite.findOne({
      where: { user_id: userId, book_id: id },
    });

    if (!favorite) {
      await Favorite.create({ user_id: userId, book_id: id });
    } else {
      await Favorite.destroy({ where: { user_id: userId, book_id: id } });
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

export default cabinetRouter;

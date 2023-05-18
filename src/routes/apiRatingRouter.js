import express from 'express';
import { Rating } from '../../db/models';

const apiRatingRouter = express.Router();

apiRatingRouter.post('/rating/:id', async (req, res) => {
  const bookId = req.params.id;
  const { ratingvalue } = req.body;
  const { id } = req.session.user;

  let rating = await Rating.findOne({
    where: {
      book_id: bookId,
      user_id: id,
    },
  });

  if (rating) {
    rating.ratingvalue = ratingvalue;
    await rating.save();
  }
  if (!rating) {
    rating = await Rating.create({
      ratingvalue,
      book_id: bookId,
      user_id: id,
    });
  }

  res.sendStatus(200);
});

export default apiRatingRouter;

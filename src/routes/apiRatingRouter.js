import express from 'express';
import { Rating } from '../../db/models';

const apiRatingRouter = express.Router();

apiRatingRouter.post('/rating/:id', async (req, res) => {
  const bookid = req.params.id;
  const { ratingvalue } = req.body;
  const { id } = req.session.user;
  await Rating.create({
    ratingvalue,
    book_id: bookid,
    user_id: id,
  });
});

export default apiRatingRouter;

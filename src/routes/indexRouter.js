import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  try {
    res.render('Layout', {});
  } catch (e) {
    console.log(e);
  }
});

export default indexRouter;

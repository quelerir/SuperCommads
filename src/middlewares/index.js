import { Comment } from '../../db/models';

export const pathMiddleware = (req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session?.user;
  next();
};

export const checkAuth = (req, res, next) => {
  if (!req.session?.user) return res.sendStatus(500);
  return next();
};

export const checkUser = async (req, res, next) => {
  const comment = await Comment.findByPk(req.params.id);
  if (comment.user_id === req.session?.user?.id) return next();
  return res.sendStatus(403);
};

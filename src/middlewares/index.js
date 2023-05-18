export const pathMiddleware = (req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session?.user;
  next();
};

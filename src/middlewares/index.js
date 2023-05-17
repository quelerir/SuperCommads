export const pathMiddleware = (req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
};

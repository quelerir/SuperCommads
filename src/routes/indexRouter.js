import express from 'express';
import { Book, Rating, Comment } from '../../db/models';


const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
  try {
    res.redirect("/books");
  } catch (e) {
    console.log(e);
  }
});

indexRouter.get("/books", async (req, res) => {
  try {
    const allbooks = await Book.findAll();
    const initState = { allbooks };
    res.render("Layout", initState);
  } catch (e) {
    console.log(e);
  }
});

indexRouter.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    const comments = await Comment.findAll({ where: { book_id: id } });
    const initState = { book, comments };
    res.render("Layout", initState);
  } catch (e) {
    console.log(e);
  }
});

indexRouter.get("/signup", (req, res) => {
  try {
    res.render("Layout", {});
  } catch (e) {
    console.log(e);
  }
});

indexRouter.get("/login", (req, res) => {
  try {
    res.render("Layout", {});
  } catch (e) {
    console.log(e);
  }
});

export default indexRouter;

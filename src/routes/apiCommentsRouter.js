import express from "express";
import { Comment } from "../../db/models";

const router = express.Router();

router.delete("/comments/:id", async (req, res) => {
  const { id } = req.params;
  await Comment.destroy({ where: { id } });
  res.sendStatus(200);
});
module.exports = router;


const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const verifyRouter = express.Router();

verifyRouter.get("/protected-data", verifyToken, (req, res) => {
  res.json({ message: "This is protected data!", user: req.user });
});

module.exports = { verifyRouter };

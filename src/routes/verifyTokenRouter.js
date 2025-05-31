import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
const verifyRouter = express.Router();

verifyRouter.get("/protected-data", verifyToken, (req, res) => {
  res.json({ message: "This is protected data!", user: req.user });
});

export default verifyRouter;

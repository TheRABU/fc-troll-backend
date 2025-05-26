const express = require("express");
const { generateImageFromText } = require("../controllers/imageController");
const imageRouter = express.Router();

imageRouter.post("/", generateImageFromText);

module.exports = imageRouter;

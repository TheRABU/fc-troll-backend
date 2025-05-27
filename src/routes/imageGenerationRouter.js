const express = require("express");
const {
  generateImage,
  suggestKeywords,
} = require("../controllers/imageController.js");
const imageRouter = express.Router();

imageRouter.post("/generate-image", generateImage);
imageRouter.post("/suggest-keywords", suggestKeywords);

module.exports = imageRouter;

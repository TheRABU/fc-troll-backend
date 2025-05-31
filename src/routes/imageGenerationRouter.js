const express = require("express");
const {
  generateImage,
  getImagesofUser,
} = require("../controllers/imageController.js");
const imageRouter = express.Router();

imageRouter.post("/generate-image/:email", generateImage);
imageRouter.get("/get-image/:email", getImagesofUser);

module.exports = imageRouter;

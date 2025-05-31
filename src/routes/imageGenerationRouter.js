import express from "express";
import {
  generateImage,
  getImagesofUser,
} from "../controllers/imageController.js";

const imageRouter = express.Router();

imageRouter.post("/generate-image/:email", generateImage);
imageRouter.get("/get-image/:email", getImagesofUser);

export default imageRouter;

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import bodyParser from "body-parser";
const app = express();

import imageGenerationRouter from "./routes/imageGenerationRouter.js";
import jwtRouter from "../src/routes/jwtRouter.js";
import userRouter from "./routes/userRouter.js";

// body parser configuration
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/// image generation route
app.use("/api", imageGenerationRouter);
// app.use("/api", jwtRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "Server is running sir!!" });
});

// client side error handling
// app.use((req, res, next) => {
//   res.status(404).json({
//     message: "Could not found sorry",
//   });
// });
// server side error
// app.use((err, req, res, next) => {
//   return errorResponse(res, {
//     statusCode: err.status,
//     message: err.message,
//   });
// });

export default app;

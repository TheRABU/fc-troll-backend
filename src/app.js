const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

const imageGenerationRouter = require("./routes/imageGenerationRouter");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/// image generation route
app.use("/api/generate-image", imageGenerationRouter);

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

module.exports = app;

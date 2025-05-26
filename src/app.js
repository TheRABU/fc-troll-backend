const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", async (req, res) => {
  res.json("Server choltase bhai");
});

// client side error handling
app.use((req, res, next) => {
  res.status(404).json({
    message: "Could not found sorry",
  });
});
// server side error
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;

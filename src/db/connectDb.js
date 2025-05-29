const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const MONGO_URI = `${process.env.MONGODB_STRING}`;

    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully sir!");
  } catch (error) {
    console.log("Error in connectDB::", error.message);
  }
};

module.exports = { connectDatabase };

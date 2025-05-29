const mongoose = require("mongoose");
const User = require("../models/Usermodel");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const user = req.body;
    const { email, name, password } = user;
    if (!email || !name || !password) {
      return res.json({
        status: 400,
        message: "email, name and password must be provided",
      });
    }
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.json({
        status: 400,
        message: "User already exists! Try login. Or create with a new email",
      });
    }
    const createNewUser = await new User.create({ ...user });

    res.json({
      status: 200,
      message: "User account created successfully!",
      payload: createNewUser,
    });
  } catch (error) {
    console.log("Error at UserController::", error.message);
    throw new error();
  }
};

module.exports = { registerUser };

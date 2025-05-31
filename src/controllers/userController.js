import mongoose from "mongoose";
import User from "../models/Usermodel.js";
import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const registerUser = async (req, res) => {
  try {
    const user = req.body;
    // the password will be verified by firebase!
    const { email, name } = user;
    if (!email) {
      return res.json({
        status: 400,
        message: "email, name and password must be provided",
      });
    }
    let findUser = await User.findOne({ email });
    if (findUser) {
      return res.json({
        status: 400,
        message: "User already exists! Try login. Or create with a new email",
      });
    }
    if (!findUser) {
      const createNewUser = await User.create({ ...user });

      const token = generateToken({
        email: user.email,
        userId: user._id,
        role: user.role,
      });

      res.json({
        status: 200,
        message: "User account created successfully!",
        payload: createNewUser,
        token,
      });
    } else {
      if (user.name !== name || user.photoURL !== photoURL) {
        user.name = name || user.name;
        user.photoURL = photoURL || user.photoURL;
        await user.save();
        console.log("Existing user updated in MongoDB:", user.email);
      }
      console.log("User already exists in mongodb");
    }
  } catch (error) {
    console.log("Error at UserController::", error.message);
    throw new error();
  }
};

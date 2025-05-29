const { jwt } = require("jsonwebtoken");

const generateToken = async (req, res, next) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "2hr",
    });
    res.send({ token });
  } catch (error) {
    console.log("Error at creating jwtTokencontroller::", error.message);
    next(error);
  }
};

module.exports = { generateToken };

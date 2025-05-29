const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      console.log(
        "Token missing from authorization header in verify token middleware"
      );
      return res.status(401).send({ message: "Authorization token missing" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log("Token verification failed:", err.message);
        return res.status(403).json({ message: "Failed to identify token" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    console.log("Error at verifyTokenController::", error.message);
  }
};

module.exports = verifyToken;

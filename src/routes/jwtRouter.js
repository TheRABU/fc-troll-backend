const expess = require("express");
const { generateToken } = require("../controllers/jwtController");
const jwtRouter = expess.Router();

jwtRouter.post("/jwt/generateToken", generateToken);

module.exports = { jwtRouter };

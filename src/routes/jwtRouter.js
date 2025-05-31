import expess from "express";
import { generateToken } from "../controllers/jwtController.js";

const jwtRouter = expess.Router();

jwtRouter.post("/jwt/generateToken", generateToken);

export default jwtRouter;

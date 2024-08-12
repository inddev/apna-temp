import { Router } from "express";
import {
  handleAuth0Callback,
  getPrediction,
  getPanchang,
  createSession,
} from "../controllers/user.controller.js";
import {
  getMahabharata,
  getRamcharitmanas,
  getVerse,
} from "../controllers/manuscripts.controller.js";

const userRouter = Router();

userRouter.route("/").post(handleAuth0Callback);
userRouter.route("/prediction").post(getPrediction);
userRouter.route("/bhagavad-gita/:chapter").get(getVerse);
userRouter.route("/ramcharitmanas").get(getRamcharitmanas);
userRouter.route("/mahabharata").get(getMahabharata);
userRouter.route("/panchang").post(getPanchang);
userRouter.route("/createSession").post(createSession);

export { userRouter };

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
userRouter.route("/verse/:chapter").get(getVerse);
userRouter.route("/ramcharitmanas/:kaand").get(getRamcharitmanas);
userRouter.route("/mahabharata/:book").get(getMahabharata);
userRouter.route("/panchang").post(getPanchang);
userRouter.route("/createSession").post(createSession);

export { userRouter };

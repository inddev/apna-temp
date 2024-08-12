import { Router } from "express";
import {
  getAllTemples,
  getTempleById,
  getTemplesByName,
  createTemple,
  updateTemple,
} from "../controllers/temple.controller.js";

const templeRouter = Router();

templeRouter.route("/").get(getAllTemples).post(createTemple);
templeRouter.route("/:id").get(getTempleById).put(updateTemple);
templeRouter.route("/name/:name").get(getTemplesByName);

export { templeRouter };

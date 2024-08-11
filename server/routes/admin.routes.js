import { Router } from "express";
import {
  getPredictionsFromAPI,
  getPredictionsFromDB,
  getPanchangFromAPI,
  getPanchangFromDB,
  getYogaFromAPI,
} from "../controllers/admin.controller.js";
import {
  storeBhagvadGita,
  storeMahabharata,
  storeRamayan,
} from "../controllers/manuscripts.controller.js";

const adminRouter = Router();

adminRouter.route("/predictionsAPI").get(getPredictionsFromAPI);
adminRouter.route("/predictionsDB").get(getPredictionsFromDB);
adminRouter.route("/panchangAPI").get(getPanchangFromAPI);
adminRouter.route("/panchangDB").get(getPanchangFromDB);

// adminRouter.route("/storeBhagvadGita").post(storeBhagvadGita);
// adminRouter.route("/storeMahabharata").post(storeMahabharata);
// adminRouter.route("/storeRamayan").post(storeRamayan);

adminRouter.route("/yogaAPI").get(getYogaFromAPI);

export { adminRouter };

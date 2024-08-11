import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import status from "express-status-monitor";
const app = express();

app.use(express.json());
app.use(status());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Apna Sanatan Server is running!");
});

app.post("/import-data", async (req, res) => {
  try {
    const { data } = req.body;
    Ramayan.insertMany(data)
      .then((data) => {
        res.status(200).send({ message: "Data imported successfully", data });
      })
      .catch((err) => {
        res.status(500).send({ message: "Error importing data" });
      });
  } catch (error) {
    res.status(500).send({
      message: "Error importing data",
      error: error.message,
    });
  }
});

import { adminRouter } from "./routes/admin.routes.js";
app.use("/api/admin", adminRouter);

import { userRouter } from "./routes/user.routes.js";
app.use("/api/user", userRouter);

import { templeRouter } from "./routes/temple.routes.js";
import { Ramayan } from "./models/ramayan.model.js";
app.use("/api/temple", templeRouter);

export { app };

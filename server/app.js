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

import { adminRouter } from "./routes/admin.routes.js";
app.use("/api/admin", adminRouter);

import { userRouter } from "./routes/user.routes.js";
app.use("/api/user", userRouter);

import { templeRouter } from "./routes/temple.routes.js";
app.use("/api/temple", templeRouter);

export { app };

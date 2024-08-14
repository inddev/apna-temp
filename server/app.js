import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Apna Sanatan Server is running!");
});

import { adminRouter } from "./routes/admin.routes.js";
app.use("/api/admin", adminRouter);

import { userRouter } from "./routes/user.routes.js";
app.use("/api/user", userRouter);

import { templeRouter } from "./routes/temple.routes.js";
app.use("/api/temple", templeRouter);

export { app };

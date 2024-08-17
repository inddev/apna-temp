import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv";
dotenv.config();

const esClient = new Client({
  node: "http://localhost:9200",
  auth: {
    username: process.env.ELASTIC_SEARCH_USERNAME,
    password: process.env.ELASTIC_SEARCH_PASSWORD,
  },
  requestTimeout: 60000,
});

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

app.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await esClient.search({
      index: "mahabharata",
      body: {
        query: {
          match: { text: query },
        },
      },
    });
    res.status(200).send(response.hits.hits);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

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

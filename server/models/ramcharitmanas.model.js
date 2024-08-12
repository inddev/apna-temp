import mongoose from "mongoose";

const ramcharitmanasSchema = new mongoose.Schema({
  type: String,
  content: String,
  kaand: String,
});

export const Ramcharitmanas = mongoose.model(
  "Ramcharitmanas",
  ramcharitmanasSchema
);

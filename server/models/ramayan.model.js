import mongoose from "mongoose";

const ramayanSchema = new mongoose.Schema({
  type: String,
  content: String,
  kaand: String,
});

export const Ramayan = mongoose.model("Ramayan", ramayanSchema);

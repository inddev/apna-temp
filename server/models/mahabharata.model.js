import mongoose from "mongoose";

const mahabharatSchema = new mongoose.Schema({
  book: Number,
  chapter: Number,
  shloka: Number,
  text: String,
});

export const Mahabharata = mongoose.model("Mahabharata", mahabharatSchema);

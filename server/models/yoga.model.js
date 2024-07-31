import mongoose, { Schema } from "mongoose";

const PoseSchema = new Schema(
  {
    id: Number,
    category_name: String,
    english_name: String,
    sanskrit_name_adapted: String,
    sanskrit_name: String,
    translation_name: String,
    pose_description: String,
    pose_benefits: String,
    url_svg: String,
    url_png: String,
    url_svg_alt: String,
  },
  { timestamps: true }
);

const YogaSchema = new Schema(
  {
    id: Number,
    category_name: String,
    category_description: String,
    poses: [PoseSchema],
  },
  { timestamps: true }
);
export const Yoga = mongoose.model("Yoga", YogaSchema);

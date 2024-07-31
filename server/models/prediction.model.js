import mongoose, { Schema } from "mongoose";

const predictionSchema = new Schema(
  {
    zodiac: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    split: {
      type: Boolean,
    },
    lucky_color: {
      type: String,
    },
    lucky_color_code: {
      type: String,
    },
    lucky_number: [
      {
        type: Number,
      },
    ],
    total_score_no_split: {
      type: Number,
    },
    bot_response_no_split: {
      type: String,
    },
    bot_response: {
      physique: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      status: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      finances: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      relationship: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      career: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      travel: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      family: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      friends: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      health: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
      total_score: {
        score: {
          type: Number,
        },
        split_response: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

export const Prediction = mongoose.model("Prediction", predictionSchema);

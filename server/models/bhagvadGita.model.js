import mongoose, { Schema } from 'mongoose';

const bhagvadGitaSchema = new Schema({
    chapter: {
        type: Number,
        required: true,
    },
    verse: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
    },
    translations: {
        swamiTejomayananda: {
            type: String,
        },
        shriPurohitSwami: {
            type: String,
        }
    }
}, { timestamps: true });

export const Bhagvad = mongoose.model('Bhagvad', bhagvadGitaSchema);

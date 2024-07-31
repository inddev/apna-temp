import { Bhagvad } from "../models/bhagvadGita.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storeBhagvadGita = async () => {
    for(let chapter = 1; chapter <= 18; chapter++) {
        const chapterPath = path.resolve(__dirname, `../../public/Bhagvad Gita/bhagavad_gita_chapter_${chapter}.json`);
        const chapterData = JSON.parse(fs.readFileSync(chapterPath, 'utf-8'));

        if (chapterData && chapterData.BhagavadGitaChapter) {
            chapterData.BhagavadGitaChapter.forEach(async (verse) => {
                await Bhagvad.create({
                    chapter: verse.chapter,
                    verse: verse.verse,
                    text: verse.text,
                    translations: {
                        swamiTejomayananda: verse.translations['swami tejomayananda'],
                        shriPurohitSwami: verse.translations['shri purohit swami']
                    }
                });
            });
        } else {
            console.error(`Invalid data structure in file: ${chapterPath}`);
        }
    }
    console.log('Bhagvad Gita stored successfully');
};

const getVerse = asyncHandler(async (req, res) => {
    const { chapter } = req.params;
    const verseData = await Bhagvad.find({ chapter });

    if (!verseData) {
        throw new ApiError(`Verse not found: ${chapter}`, 404);
    }
    verseData.sort((a, b) => a.verse - b.verse);
    const verseContent = verseData.map(verse => {
        return {
            chapter: verse.chapter,
            verse: verse.verse,
            text: verse.text,
            translations: {
                swamiTejomayananda: verse.translations.swamiTejomayananda,
                shriPurohitSwami: verse.translations.shriPurohitSwami
            }
        };
    });
    return res.json(new ApiResponse(200, "Verse fetched successfully", verseContent));
});

export { storeBhagvadGita, getVerse };
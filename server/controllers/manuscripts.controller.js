import { Bhagvad } from "../models/bhagvadGita.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Mahabharata } from "../models/mahabharata.model.js";
import { Ramcharitmanas } from "../models/ramcharitmanas.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storeBhagvadGita = async () => {
  for (let chapter = 1; chapter <= 18; chapter++) {
    const chapterPath = path.resolve(
      __dirname,
      `../../public/Bhagvad Gita/bhagavad_gita_chapter_${chapter}.json`
    );
    const chapterData = JSON.parse(fs.readFileSync(chapterPath, "utf-8"));

    if (chapterData && chapterData.BhagavadGitaChapter) {
      chapterData.BhagavadGitaChapter.forEach(async (verse) => {
        await Bhagvad.create({
          chapter: verse.chapter,
          verse: verse.verse,
          text: verse.text,
          translations: {
            swamiTejomayananda: verse.translations["swami tejomayananda"],
            shriPurohitSwami: verse.translations["shri purohit swami"],
          },
        });
      });
    } else {
      console.error(`Invalid data structure in file: ${chapterPath}`);
    }
  }
  console.log("Bhagvad Gita stored successfully");
};

const storeRamcharitmanas = async () => {
  const totalFiles = 7;
  const promises = [];

  for (let fileIndex = 1; fileIndex <= totalFiles; fileIndex++) {
    const filePath = path.resolve(
      __dirname,
      `../../public/Ramcharitmanas/ramcharitmanas_part_${fileIndex}.json`
    );
    let fileData;

    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      fileData = JSON.parse(fileContent);
    } catch (error) {
      console.error(`Error reading or parsing file: ${filePath}`, error);
      continue;
    }

    if (Array.isArray(fileData)) {
      const filePromises = fileData.map(async (item, index) => {
        if (
          item &&
          typeof item.type === "string" &&
          typeof item.content === "string" &&
          typeof item.kaand === "string"
        ) {
          try {
            await Ramcharitmanas.create({
              type: item.type,
              content: item.content,
              kaand: item.kaand,
            });
          } catch (error) {
            console.error(
              `Error inserting data item ${index} from file ${filePath}:`,
              error
            );
          }
        } else {
          console.error(
            `Invalid data structure in item ${index} of file: ${filePath}`
          );
        }
      });

      promises.push(...filePromises);
    } else {
      console.error(
        `Invalid data structure in file: ${filePath}. Expected an array.`
      );
    }
  }

  try {
    await Promise.all(promises);
    console.log("Ramcharitmanas stored successfully");
  } catch (error) {
    console.error("Error storing Ramcharitmanas data:", error);
  }
};
const getRamcharitmanas = asyncHandler(async (req, res) => {
  try {
    const { kaand } = req.params;
    const ramcharitmanas = await Ramcharitmanas.find({ kaand: kaand });
    res.status(200).send({
      success: true,
      data: ramcharitmanas,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error fetching Ramcharitmanas",
      error,
    });
  }
});

const getVerse = asyncHandler(async (req, res) => {
  const { chapter } = req.params;
  const verseData = await Bhagvad.find({ chapter });

  if (!verseData) {
    throw new ApiError(`Verse not found: ${chapter}`, 404);
  }
  verseData.sort((a, b) => a.verse - b.verse);
  const verseContent = verseData.map((verse) => {
    return {
      chapter: verse.chapter,
      verse: verse.verse,
      text: verse.text,
      translations: {
        swamiTejomayananda: verse.translations.swamiTejomayananda,
        shriPurohitSwami: verse.translations.shriPurohitSwami,
      },
    };
  });
  return res.json(
    new ApiResponse(200, "Verse fetched successfully", verseContent)
  );
});

const storeMahabharata = async () => {
  const totalFiles = 18;
  const promises = [];

  for (let fileIndex = 1; fileIndex <= totalFiles; fileIndex++) {
    const filePath = path.resolve(
      __dirname,
      `../../public/mahabharata/mahabharata_book_${fileIndex}.json`
    );
    let fileData;

    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      fileData = JSON.parse(fileContent);
    } catch (error) {
      console.error(`Error reading or parsing file: ${filePath}`, error);
      continue;
    }

    if (Array.isArray(fileData)) {
      const filePromises = fileData.map(async (item, index) => {
        if (
          item &&
          typeof item.book === "number" &&
          typeof item.chapter === "number" &&
          typeof item.shloka === "number" &&
          typeof item.text === "string"
        ) {
          try {
            await Mahabharata.create({
              book: item.book,
              chapter: item.chapter,
              shloka: item.shloka,
              text: item.text,
            });
          } catch (error) {
            console.error(
              `Error inserting data item ${index} from file ${filePath}:`,
              error
            );
          }
        } else {
          console.error(
            `Invalid data structure in item ${index} of file: ${filePath}`
          );
        }
      });

      promises.push(...filePromises);
    } else {
      console.error(
        `Invalid data structure in file: ${filePath}. Expected an array.`
      );
    }
  }

  try {
    await Promise.all(promises);
    console.log("Mahabharata stored successfully");
  } catch (error) {
    console.error("Error storing Mahabharata data:", error);
  }
};

const getMahabharata = async (req, res) => {
  try {
    const { book } = req.params;
    const mahabharata = await Mahabharata.find({ book: book });
    res.status(200).send({
      success: true,
      data: mahabharata,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Error fetching mahabharata", error });
  }
};

export {
  storeBhagvadGita,
  getVerse,
  storeRamcharitmanas,
  getRamcharitmanas,
  storeMahabharata,
  getMahabharata,
};

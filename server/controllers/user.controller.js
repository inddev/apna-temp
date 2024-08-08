import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { Prediction } from "../models/prediction.model.js";
import { Panchang } from "../models/panchang.model.js";
import { Session } from "../models/session.model.js";
import { RtcTokenBuilder } from "agora-access-token";
import CryptoJS from "crypto-js";

const handleAuth0Callback = asyncHandler(async (req, res) => {
  const { user } = req.body;
  let fetchedUser = await User.findOne({ sub: user.sub });

  if (!fetchedUser) {
    fetchedUser = User.create({
      sub: user.sub,
      email: user.email,
      name: user.name,
      provider: "auth0",
    });
  }
  return res.json(
    new ApiResponse(200, fetchedUser, "User logged in successfully")
  );
});

const getPrediction = asyncHandler(async (req, res) => {
  const { zodiac, category, dateDB, dateAPI } = req.body;
  const prediction = await Prediction.findOne({
    zodiac,
    category,
    date: dateDB,
  });
  if (!prediction) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const zodiacToNumber = {
      Aries: 1,
      Taurus: 2,
      Gemini: 3,
      Cancer: 4,
      Leo: 5,
      Virgo: 6,
      Libra: 7,
      Scorpio: 8,
      Sagittarius: 9,
      Capricorn: 10,
      Aquarius: 11,
      Pisces: 12,
    };
    const zodiacInd = zodiacToNumber[zodiac];
    const apiUrl = `https://api.vedicastroapi.com/v3-json/prediction/${category}?zodiac=${zodiacInd}&date=${dateAPI}&show_same=false&api_key=${process.env.VEDICASTRO_API_KEY}&lang=en&split=true&type=big`;
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();

    const predictionData = {
      date: dateDB,
      zodiac: data.response.zodiac,
      category: category,
      split: true,
      ...data.response,
      bot_response: data.response.bot_response,
    };
    await Prediction.create(predictionData);

    return res.json(
      new ApiResponse(
        200,
        data.response,
        "Prediction fetched successfully from API"
      )
    );
  }

  return res.json(
    new ApiResponse(200, prediction, "Prediction fetched successfully")
  );
});

const getPanchang = asyncHandler(async (req, res) => {
  const { dateDB, dateAPI } = req.body;

  try {
    const panchang = await Panchang.findOne({ date: dateDB });
    if (panchang) {
      return res.json(
        new ApiResponse(200, panchang, "Panchang fetched successfully")
      );
    } else {
      const tz = "5.5";
      const lat = "25.3176";
      const lon = "82.9739";
      const time = "06:00";
      const lang = "en";
      const apiUrl = `https://api.vedicastroapi.com/v3-json/panchang/panchang?api_key=${process.env.VEDICASTRO_API_KEY}&date=${dateAPI}&tz=${tz}&lat=${lat}&lon=${lon}&time=${time}&lang=${lang}`;
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      const panchangData = {
        day: data.response.day,
        tithi: data.response.tithi,
        nakshatra: data.response.nakshatra,
        karana: data.response.karana,
        yoga: data.response.yoga,
        ayanamsa: data.response.ayanamsa,
        rasi: data.response.rasi,
        advanced_details: data.response.advanced_details,
        rahukaal: data.response.rahukaal,
        gulika: data.response.gulika,
        yamakanta: data.response.yamakanta,
        date: dateDB,
      };

      await Panchang.create(panchangData);

      return res.status(404).json(new ApiResponse(404, "Panchang not found"));
    }
  } catch (err) {
    console.error("Error fetching panchang:", err);
    return res.status(500).json(new ApiResponse(500, "Internal Server Error"));
  }
});

function generateToken(channelName, uid, role = "broadcaster") {
  const expirationTimeInSeconds = 3600;
  const currentTime = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTime + expirationTimeInSeconds;
  const APP_ID = process.env.AGORA_APP_ID;
  const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE

  return RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    channelName,
    uid,
    role,
    privilegeExpiredTs
  );
}

const createSession = asyncHandler(async (req, res) => {
  const { userId, astrologerId } = req.body;
  if (!userId || !astrologerId) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const date = Date.now();
  const rawChannelName = `${userId}${astrologerId}${date}`;
  const channelName = CryptoJS.MD5(rawChannelName).toString();

  const userToken = generateToken(channelName, userId);
  const astrologerToken = generateToken(channelName, astrologerId);

  // Send notification to astrologer with {astrologerToken, channelName} here

  return res
    .status(200)
    .json(new ApiResponse(200, { channelName, userToken, astrologerToken }));
});

export { handleAuth0Callback, getPrediction, getPanchang, createSession };

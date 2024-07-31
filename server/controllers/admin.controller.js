import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Prediction } from "../models/prediction.model.js";
import { Panchang } from "../models/panchang.model.js";
import { Yoga } from "../models/yoga.model.js";

function getWeekDates() {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    const formattedDate = [`${day}/${month}/${year}`, `${day}-${month}-${year}`];
    dates.push(formattedDate);
  }

  return dates;
}

const getPredictionsFromAPI = asyncHandler(async (req, res) => {
  const zodiacs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const apiSubCategory = ["daily-sun", "daily-moon"];
  const dates = getWeekDates();
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    for (let category of apiSubCategory) {
      for (let zodiac of zodiacs) {
        for (let date of dates) {
          const apiUrl = `https://api.vedicastroapi.com/v3-json/prediction/${category}?zodiac=${zodiac}&date=${date[0]}&show_same=false&api_key=${process.env.VEDICASTRO_API_KEY}&lang=en&split=true&type=big`;
          const response = await fetch(apiUrl, requestOptions);
          if (!response.ok) {
            throw new Error(`Failed to fetch data for ${category}, zodiac ${zodiac}, date ${date[0]}`);
          }
          const data = await response.json();
          const predictionData = {
            date: date[1],
            zodiac: data.response.zodiac,
            category: category,
            split: true,
            ...data.response,
            bot_response: data.response.bot_response,
          };
          await Prediction.create(predictionData);
        }
      }
    }
    return res.json(new ApiResponse(200, "Predictions fetched successfully"));
  } catch (error) {
    console.error(error);
    return res.status(500).json(new ApiResponse(500, "Failed to fetch predictions"));
  }
});

const getPredictionsFromDB = asyncHandler(async (req, res) => {
  const predictions = await Prediction.find();
  return res.json(
    new ApiResponse(200, "Predictions fetched successfully", predictions)
  );
});

const getPanchangFromAPI = asyncHandler(async (req, res) => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  const dateToDB = `${day}-${month}-${year}`;
  const tz = '5.5';
  const lat = '25.3176';
  const lon = '82.9739';
  const time = '06:00';
  const lang = 'en';
  const apiUrl = `https://api.vedicastroapi.com/v3-json/panchang/panchang?api_key=${process.env.VEDICASTRO_API_KEY}&date=${formattedDate}&tz=${tz}&lat=${lat}&lon=${lon}&time=${time}&lang=${lang}`;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
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
    date: dateToDB,
  };
  
  await Panchang.create(panchangData);

  return res.json(new ApiResponse(200, 'Panchang fetched successfully'));
});

const getPanchangFromDB = asyncHandler(async (req, res) => {
  const { date } = req.params;
  const panchang = await Panchang.find({date});
  return res.json(new ApiResponse(200, 'Panchang fetched successfully', panchang));
});

const getYogaFromAPI = asyncHandler(async (req, res) => {
  const apiUrl = `https://yoga-api-nzy4.onrender.com/v1/categories`
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(apiUrl, requestOptions);
  const data = await response.json();

  for (let category of data) {
    const poses = category.poses;
    const yogaData = {
      id: category.id,
      category_name: category.name,
      category_description: category.description,
      poses: poses,
    };
    await Yoga.create(yogaData);
  }

  return res.json(new ApiResponse(200, 'Yoga Details fetched successfully'));
});

export { getPredictionsFromAPI, getPredictionsFromDB, getPanchangFromAPI, getPanchangFromDB, getYogaFromAPI };

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Temple } from "../models/temple.model.js";

const getAllTemples = asyncHandler(async (req, res) => {
  const temples = await Temple.find();
  return res.json(
    new ApiResponse(200, temples, "Temples fetched successfully")
  );
});

const getTempleById = asyncHandler(async (req, res) => {
  const temple = await Temple.findById(req.params.id);
  if (!temple) {
    throw new ApiError(404, `Temple with id: ${req.params.id} not found`);
  }
  return res.json(new ApiResponse(200, temple, "Temple fetched successfully"));
});

const getTemplesByName = asyncHandler(async (req, res) => {
  const temples = await Temple.find({
    temple_name: { $regex: req.params.name, $options: "i" },
  });

  if (!temples || temples.length === 0) {
    throw new ApiError(
      404,
      `Temples with name similar to: ${req.params.name} not found`
    );
  }
  return res.json(
    new ApiResponse(200, temples, "Temples fetched successfully")
  );
});

const createTemple = asyncHandler(async (req, res) => {
  const temple = await Temple.create(req.body);
  return res.json(new ApiResponse(201, temple, "Temple created successfully"));
});

const updateTemple = asyncHandler(async (req, res) => {
  const temple = await Temple.findById(req.params.id);
  if (!temple) {
    throw new ApiError(404, `Temple with id: ${req.params.id} not found`);
  }

  Object.assign(temple, req.body);
  await temple.save();

  return res.json(new ApiResponse(200, temple, "Temple updated successfully"));
});

export { getAllTemples, getTempleById, getTemplesByName, createTemple, updateTemple }
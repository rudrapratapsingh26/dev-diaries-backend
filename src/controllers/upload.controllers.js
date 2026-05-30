import ApiResponse from "../utils/api-response.js";
import ApiError from "../utils/api-errors.js";
import asyncHandler from "../utils/async-handler.js";

const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { url: req.file.path },
        "Image uploaded successfully"
      )
    );
});

export { uploadImage };

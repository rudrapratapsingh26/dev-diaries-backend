import cloudinary from "../utils/cloudinary.js";
import ApiResponse from "../utils/api-response.js";
import ApiError from "../utils/api-errors.js";
import asyncHandler from "../utils/async-handler.js";

const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "dev-diaries" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(req.file.buffer);
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { url: result.secure_url },
        "Image uploaded successfully"
      )
    );
});

export { uploadImage };

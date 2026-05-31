import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "deks2qylz",
  api_key: "925523852619255",
  api_secret: "QCHkbFn0H5lgvebK-zMCeSStKxg",
});

console.log("Cloudinary config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
})

export const upload = multer({ storage: multer.memoryStorage() });
export default cloudinary;

import { Router } from "express";
import { upload } from "../utils/cloudinary.js";
import { uploadImage } from "../controllers/upload.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, upload.single("image"), uploadImage);

export default router;

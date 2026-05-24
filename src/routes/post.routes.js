import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostBySlug,
  updatePost,
  deletePost,
  getMyPosts,
} from "../controllers/post.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", getAllPosts);
router.get("/my-posts", verifyJWT, getMyPosts);
router.get("/:slug", getPostBySlug);
router.post("/", verifyJWT, createPost);
router.put("/:id", verifyJWT, updatePost);
router.delete("/:id", verifyJWT, deletePost);

export default router;

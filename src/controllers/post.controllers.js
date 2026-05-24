import slugify from "slugify";
import { Post } from "../models/post.model.js";
import ApiError from "../utils/api-errors.js";
import ApiResponse from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";

// CREATE POST
const createPost = asyncHandler(async (req, res) => {
  const { title, content, coverImage, status } = req.body;

  if (!title || !content) {
    throw new ApiError(400, "Title and content are required");
  }

  const slug = slugify(title, { lower: true, strict: true });

  const existingPost = await Post.findOne({ slug });
  if (existingPost) {
    throw new ApiError(409, "Post with this title already exists");
  }

  const post = await Post.create({
    title,
    content,
    slug,
    coverImage: coverImage || "",
    status: status || "published",
    author: req.user._id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, post, "Post created successfully"));
});

// GET ALL POSTS
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ status: "published" })
    .populate("author", "username email")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, posts, "Posts fetched successfully"));
});

// GET SINGLE POST
const getPostBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  const post = await Post.findOne({ slug }).populate(
    "author",
    "username email"
  );

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, post, "Post fetched successfully"));
});

// UPDATE POST
const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, content, coverImage, status } = req.body;

  const post = await Post.findById(id);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  if (post.author.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not allowed to update this post");
  }

  if (title) post.title = title;
  if (title) post.slug = slugify(title, { lower: true, strict: true });
  if (content) post.content = content;
  if (coverImage) post.coverImage = coverImage;
  if (status) post.status = status;

  await post.save();

  return res
    .status(200)
    .json(new ApiResponse(200, post, "Post updated successfully"));
});

// DELETE POST
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  if (post.author.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not allowed to delete this post");
  }

  await Post.findByIdAndDelete(id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Post deleted successfully"));
});

// GET MY POSTS
const getMyPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ author: req.user._id }).sort({
    createdAt: -1,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, posts, "Your posts fetched successfully"));
});

export {
  createPost,
  getAllPosts,
  getPostBySlug,
  updatePost,
  deletePost,
  getMyPosts,
};

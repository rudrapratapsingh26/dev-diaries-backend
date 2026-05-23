import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    coverImage: { type: String },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);

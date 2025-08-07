import Post from "../models/Post.model.js";
import { CustomErrorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      CustomErrorHandler(403, "You are not allowed to create a post")
    );
  }
  if (!req.body.title || !req.body.content) {
    return next(CustomErrorHandler(400, "Please provide all required fields"));
  }
  console.log("title or body is missing");

  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {};
export const deletePost = async (req, res, next) => {};

export const getPosts = async (req, res, next) => {};

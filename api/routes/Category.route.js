import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createCategory,
  getallCategories,
  editCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

// Create a new category
router.post("/create", verifyToken, createCategory);

// Get all categories
router.get("/getCategories", getallCategories);

// Update a category
router.put("/editCategory/:CategoryId", verifyToken, editCategory);

// Delete a category
router.delete("/deleteCategory/:CategoryId", verifyToken, deleteCategory);

export default router;

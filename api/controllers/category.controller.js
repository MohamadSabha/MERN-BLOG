import Category from "../models/Category.model.js";
import { CustomErrorHandler } from "../utils/error.js";

export const createCategory = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return next(
        CustomErrorHandler(
          403,
          "(Only Admin is allowed to create new category)"
        )
      );
    }
    const { name } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const NewCategory = new Category({ name, slug });

    const savedCategory = await NewCategory.save();

    res.status(201).json(savedCategory);
  } catch (err) {
    next(err);
  }
};
export const getallCategories = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === "desc" ? -1 : 1;
    const categories = await Category.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);
    // .populate("userId", "username") // populate only username
    // .populate("postId", "title"); // populate only post title

    const totalCategories = await Category.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthCategories = await Category.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });
    res.status(200).json({ categories, totalCategories, lastMonthCategories });
  } catch (error) {
    next(error);
  }
};

export const editCategory = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return next(
        CustomErrorHandler(
          403,
          "(Only Admin is allowed to create new category)"
        )
      );
    }
    const { name } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const updated = await Category.findByIdAndUpdate(
      req.params.CategoryId,
      { name, slug },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return next(
        CustomErrorHandler(
          403,
          "(Only Admin is allowed to create new category)"
        )
      );
    }
    await Category.findByIdAndDelete(req.params.CategoryId);
    res.json({ message: "Category deleted" });
  } catch (err) {
    next(err);
  }
};

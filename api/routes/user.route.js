import express from "express";
import { test } from "../controllers/user.controller.js";
const router = express.Router();

// This route is used to test the user controller functionality
router.get("/", (req, res) => {
  res.status(200).json({ message: "User route is working!" });
});

export default router;

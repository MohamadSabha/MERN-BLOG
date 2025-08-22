// we changed the type in package.json to module in order to use import instead of require
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { logger } from "./middleware/logger.js";
import { CustomErrorHandler } from "./utils/error.js";

import UserRoutes from "./routes/user.route.js";
import AuthRoutes from "./routes/auth.route.js";
import PostRoutes from "./routes/post.route.js";
import CommentRoutes from "./routes/comment.route.js";
import categoryRoutes from "./routes/Category.route.js";
import contactRoutes from "./routes/contact.route.js";

import cookieParser from "cookie-parser";
import path from "path";

// this is for deploying on render  in order to create a dirfectory name for the main folder of the project
const __dirname = path.resolve();

// express app
const app = express();
dotenv.config();

// logger middleware
app.use(logger);

//Middleware to parse incoming JSON requests and make data available in req.body
app.use(express.json());

// cookie parser middleware
app.use(cookieParser());
//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connectted to mongo db");
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on post 3000");
});

//Routs
app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/comment", CommentRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/contact", contactRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/dist")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// 404 middileware
app.use((req, res, next) => {
  next(CustomErrorHandler(404, "Rout not found "));
});

//error middileware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Middileware error - internal server error ";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// we changed the type in package.json to module in order to use import instead of require
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.DBCONNECTION)
  .then(() => {
    console.log("database is connected ");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on post 3000");
});

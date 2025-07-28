// we changed the type in package.json to module in order to use import instead of require
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("server is running on post 3000222");
});

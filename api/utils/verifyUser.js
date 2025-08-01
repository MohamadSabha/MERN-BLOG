import jwt from "jsonwebtoken";
import { CustomErrorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(CustomErrorHandler(401, "Unautherized - No token is provided"));
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return next(CustomErrorHandler(401, "Unautherized - Token is not valid"));
    }
    req.user = user;
    next();
  });
};

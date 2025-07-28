import { CustomErrorHandler } from "../../utils/error.js";
import User from "../model/User.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // call custom error handler middileware
    next(CustomErrorHandler(400, "all fields are required"));
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = new User({
    username: username,
    email: email,
    password: hash,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "signup successful" });
  } catch (err) {
    next(err);
  }
};

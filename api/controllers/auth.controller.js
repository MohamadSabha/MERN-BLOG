import { CustomErrorHandler } from "../../utils/error.js";
import User from "../model/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    // call custom error handler middileware
    next(CustomErrorHandler(400, "all fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(CustomErrorHandler(400, "user not found"));
    }
    const validPassowrd = await bcrypt.compare(password, validUser.password);
    if (!validPassowrd) {
      return next(CustomErrorHandler(400, "invalid passowrd"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.SECRET, {
      expiresIn: "3d",
    });
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};

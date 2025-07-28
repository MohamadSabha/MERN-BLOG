import User from "../model/User.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(400).json({ message: "all fields are required" });
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
    res.status(500).json({ message: err.message });
  }
};

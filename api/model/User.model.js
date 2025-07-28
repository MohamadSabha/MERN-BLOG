import { Timestamp } from "bson";
import mongoose, { mongo } from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      uniqe: true,
    },
    email: {
      type: string,
      required: true,
      uniqe: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { Timestamp: true }
);

const User = mongoose.model("User", userSchema);
export default User;

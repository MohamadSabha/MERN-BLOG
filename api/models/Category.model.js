import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true }, // optional, for URLs
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);

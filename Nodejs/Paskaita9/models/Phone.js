import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  brand: String,
  year: Number
})

export default mongoose.model("Phone", phoneSchema);
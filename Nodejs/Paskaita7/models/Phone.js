import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  year: Number
})

export default mongoose.model("phone", phoneSchema);
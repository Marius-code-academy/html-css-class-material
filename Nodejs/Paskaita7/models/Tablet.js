import mongoose from "mongoose";

const tabletSchema = new mongoose.Schema({
  price: Number,
  brand: String,
  year: Number,
  model: String,
  screenSize: Number,
})

export default mongoose.model("tablets", tabletSchema);
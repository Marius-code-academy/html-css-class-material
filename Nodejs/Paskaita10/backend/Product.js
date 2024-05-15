import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  amount: Number
})

export default mongoose.model("Product", productSchema);
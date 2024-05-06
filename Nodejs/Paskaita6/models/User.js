import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  age: Number
})

export default mongoose.model("user", userSchema);
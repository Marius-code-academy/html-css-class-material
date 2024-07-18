import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
})

export default mongoose.model("user", userSchema);
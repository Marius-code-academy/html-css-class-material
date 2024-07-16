import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  dob: Date,
  monthlyIncome: Number,
});

export default mongoose.model("user", userSchema);
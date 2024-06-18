import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  body: String,
  completed: Boolean,
  deadline: Date,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Todo", todoSchema);

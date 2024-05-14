import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: String,
  phone: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Phone"
    }
  ]
})

export default mongoose.model("Person", personSchema)
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  reservationDate: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true
  },
});

export default mongoose.model("reservation", reservationSchema);
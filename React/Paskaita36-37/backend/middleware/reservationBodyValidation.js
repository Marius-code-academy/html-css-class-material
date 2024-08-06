import joi from "joi";
import joiDate from "@joi/date";

const extendedJoi = joi.extend(joiDate);

const reservationSchema = joi.object({
  name: extendedJoi.string().min(3).max(20).required(),
  reservationDate: extendedJoi.date().format("YYYY-MM-DD HH:mm").min("now").required(),
  tel: extendedJoi.string().min(12).max(12).required(),
});

export async function validateReservationBody(req, res, next) {
  const { error } = reservationSchema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  next();
}

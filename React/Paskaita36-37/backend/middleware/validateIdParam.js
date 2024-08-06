import mongoose from "mongoose";

export async function validateIdParam(req, res, next) {
  const { id } = req.params;

  const isIdValid = mongoose.Types.ObjectId.isValid(id);

  if (!isIdValid) {
    res.status(400).json({ message: "id is not valid" });
    return;
  }

  next();
}

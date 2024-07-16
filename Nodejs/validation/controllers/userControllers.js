import User from "../models/User.js";

export async function createUser(req, res, next) {
  const { name, email, dob, monthlyIncome } = req.body;

  // try {
  //   throw new Error("aasjkdnfkjan");
  // } catch (error) {
  //   return next(error);
  // }

  const newUser = new User({
    name,
    email,
    dob,
    monthlyIncome,
  });

  await newUser.save();

  res.json(newUser);
}

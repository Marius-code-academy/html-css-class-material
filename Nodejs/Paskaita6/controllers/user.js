import User from "../models/User.js"

export async function getUsers(req, res) {
  const users = await User.find({});

  res.json(users)
}

export async function createUser(req, res) {
  const { email, password, age } = req.body;

  const newUser = new User({
    email: email,
    password: password,
    age: age,
  })

  await newUser.save();

  res.json(newUser)
}
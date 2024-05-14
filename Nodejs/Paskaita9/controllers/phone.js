import Phone from "../models/Phone.js"

export async function addPhone(req, res) {
  const { brand, year } = req.body;

  const newPhone = new Phone({
    brand,
    year
  })

  await newPhone.save();

  res.json(newPhone)
}
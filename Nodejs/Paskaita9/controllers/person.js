import Person from "../models/Person.js";
import Phone from "../models/Phone.js"

export async function addPerson(req, res) {
  const { name, email } = req.body;

  const newPerson = new Person({
    name,
    email
  })

  await newPerson.save();

  res.json(newPerson);
}

export async function addPhoneToPerson(req, res) {
  const { personId, phoneId } = req.params;

  const person = await Person.findById(personId);
  const phone = await Phone.findById(phoneId);

  person.phone.push(phone);

  await person.save();

  res.json(person)
}

export async function getPeople(req, res ) {
  const people = await Person.find();

  res.json(people);
}

export async function getPeopleWithPhones(req, res) {
  const people = await Person.find().populate("phone");

  res.json(people)
}
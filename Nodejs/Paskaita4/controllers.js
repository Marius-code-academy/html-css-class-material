import { v4 as uuidv4 } from "uuid";

let users = [
  {
    name: "Vardas 1",
    age: 85,
    id: 1,
  },
  {
    name: "Vardas 2",
    age: 50,
    id: 2,
  },
];

export function getUsers(req, res) {
  res.json(users);
}

export function getUserById(req, res) {
  const params = req.params;
  const id = +params.id;

  const user = users.find((u) => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ success: false });
  }
}

export function addUser(req, res) {
  const body = req.body;

  const newUser = {
    ...body,
    id: uuidv4(),
  };

  users.push(newUser);

  res.status(201).json(newUser);
}

export function deleteUserById(req, res) {
  const id = req.params.id;

  users = users.filter((u) => u.id !== id);

  res.status(202).json({ success: true });
}

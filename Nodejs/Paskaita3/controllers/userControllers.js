const users = [
  {
    name: "kazkas",
    age: 30,
  },
];

export function getUsersController(req, res) {
  res.json(users);
}

export function addNewUser(req, res) {
  const body = req.body;

  users.push(body);

  res.json({
    success: true,
  });
}

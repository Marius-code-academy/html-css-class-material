import Todo from "./Todo.js";

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find();

    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addTodo(req, res) {
  const { title, body, deadline } = req.body;

  if (!title || !body || !deadline) {
    res.status(400).json({ error: "All fields required" });
    return;
  }

  try {
    const newTodo = new Todo({
      title,
      body,
      deadline,
    });

    await newTodo.save();

    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateTodo(req, res) {
  const { id } = req.params;
  const { title, body, completed, deadline } = req.body;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      res.status(404).json({ message: "todo not found" });
      return;
    }

    if (title) {
      todo.title = title;
    }

    if (body) {
      todo.body = body;
    }

    if (completed) {
      todo.completed = completed;
    }

    if (deadline) {
      todo.deadline = deadline;
    }

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteTodo(req, res) {
  const { id } = req.params;

  try {
    const response = await Todo.findByIdAndDelete(id);
    console.log(response);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
import { useState } from "react";
import styles from "./Todo.module.css";
import axios from "axios";
import DisplayInput from "../DisplayInput/DisplayInput";

export default function Todo({ todo, setTodos }) {
  const [todoCompleted, setTodoCompleted] = useState(todo.completed);

  const API_URL = import.meta.env.VITE_API_URL;

  function handleCheckbox(e) {
    setTodoCompleted(e.target.checked);

    const requestBody = {
      completed: e.target.checked,
    };
    axios
      .put(`${API_URL}/todo/${todo._id}`, requestBody)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err.message));
  }

  function handleDelete() {
    axios
      .delete(`${API_URL}/todo/${todo._id}`)
      .then((response) => {
        console.log(response);
        axios.get(`${API_URL}/todo`).then((resp) => {
          const todos = resp.data;
          setTodos(todos);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async function handleUpdate(value, fieldName) {
    const requestBody = {
      [fieldName]: value,
    };

    await axios.put(`${API_URL}/todo/${todo._id}`, requestBody);
  }

  return (
    <div className={styles.card}>
      <DisplayInput text={todo.title} value={todo.title} handleBlur={(value) => handleUpdate(value, "title")} />
      <DisplayInput text={`Date created: ${todo.dateCreated.split("T")[0]}`} value={todo.dateCreated.split("T")[0]} />
      <DisplayInput text={todo.body} value={todo.body} handleBlur={(value) => handleUpdate(value, "body")} />
      <DisplayInput text={`Deadline: ${todo.deadline.split("T")[0]}`} value={todo.deadline.split("T")[0]} handleBlur={(value) => handleUpdate(value, "deadline")} />
      <input type="checkbox" onChange={handleCheckbox} checked={todoCompleted} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

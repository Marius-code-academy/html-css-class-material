import { useState } from "react";
import axios from "axios";

export default function TodosForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [deadline, setDeadline] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  async function onSubmit(e) {
    e.preventDefault();

    const requestBody = {
      title,
      body,
      deadline,
    };
    try {
      const response = await axios.post(`${API_URL}/todo`, requestBody);
      const getResponse = await axios.get(`${API_URL}/todo`);
      setTodos(getResponse.data);
      setTitle("");
      setBody("");
      setDeadline("");
    } catch (error) {
      console.log(error);
      alert("Kazkas nepavyko");
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="titleInput">Title</label>
        <input type="text" id="titleInput" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
        <label htmlFor="bodyInput">Body</label>
        <input type="text" id="bodyInput" value={body} onChange={(e) => setBody(e.target.value)} /> <br />
        <label htmlFor="deadlineInput">Deadline</label>
        <input type="date" id="deadlineInput" value={deadline} onChange={(e) => setDeadline(e.target.value)} /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

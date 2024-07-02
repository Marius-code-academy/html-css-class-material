import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/todos";

export default function TodosContainer() {
  const [todos, setTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("true");


  const cahedAddNumbers = useCallback((a, b) => a + b, [])

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(API_LINK)
      .then((response) => setTodos(response.data))
      .catch((err) => alert(err.message));
    cahedAddNumbers(2, 4)
  }, [cahedAddNumbers]);

  function sortTodos() {
    if (selectedOption === "true") {
      return todos.sort((a, b) => b.completed - a.completed)
    } else {
      return todos.sort((a, b) => a.completed - b.completed)
    }
  }

  const sortedTodos = useMemo(sortTodos, [selectedOption, todos])

  return (
    <div>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        <option value={true}>Completed on top</option>
        <option value={false}>Completed last</option>
      </select>
      {sortedTodos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>Completed: {todo.completed.toString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

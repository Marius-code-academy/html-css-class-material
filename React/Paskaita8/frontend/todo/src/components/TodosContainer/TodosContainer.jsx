import Todo from "../Todo/Todo";

export default function TodosContainer({ todos, setTodos }) {
  console.log(todos);
  return (
    <div>
      {
        todos.map((todo) => <Todo setTodos={setTodos} key={todo._id} todo={todo}/>)
      }
    </div>
  )
}

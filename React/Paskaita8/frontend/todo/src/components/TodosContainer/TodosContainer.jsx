import Todo from "../Todo/Todo";

export default function TodosContainer({ todos }) {
  console.log(todos);
  return (
    <div>
      {
        todos.map((todo) => <Todo key={todo._id} todo={todo}/>)
      }
    </div>
  )
}

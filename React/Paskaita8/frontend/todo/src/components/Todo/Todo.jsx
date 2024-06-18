import styles from "./Todo.module.css"

export default function Todo({ todo }) {
  return (
    <div className={styles.card}>
      <h5>{todo.title}</h5>
      <p>Date created: {todo.dateCreated.split("T")[0]}</p>
      <p>{todo.body}</p>
      <p>Deadline: {todo.deadline.split("T")[0]}</p>
      <input type="checkbox" checked={todo.completed}/>
    </div>
  )
}

import PeopleContainer from "../PeopleContainer/PeopleContainer"
import styles from "./Main.module.css"

export default function Main() {
  return (
    <div className={styles.container}>
      <h1>People List</h1>
      <PeopleContainer />
    </div>
  )
}

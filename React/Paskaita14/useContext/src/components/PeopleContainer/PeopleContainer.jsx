import axios from "axios";
import { useEffect, useState } from "react";
import PersonCard from "../PersonCard/PersonCard";
import styles from "./PeopleContainer.module.css"

const API_LINK = "https://jsonplaceholder.typicode.com/users";

export default function PeopleContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => setUsers(response.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className={styles.container}>
      {users.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

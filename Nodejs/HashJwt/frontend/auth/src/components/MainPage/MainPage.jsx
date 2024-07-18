import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_HOST = import.meta.env.VITE_API_URL;

export default function MainPage() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login")
    } else {
      axios
        .get(API_HOST + "/users", {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
          }
        })
        .then((response) => setUsers(response.data))
        .catch((err) => {
          if (err.response.status === 403) {
            localStorage.removeItem("token");
            navigate("/login")
          } else {
            alert("kazkas negerai, pabandykite veliau")
          }
        });
    }
  }, []);

  function logout() {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return <div>
    <button onClick={logout}>Logout</button>
    <pre>
      {users.toString()}
    </pre>
  </div>;
}

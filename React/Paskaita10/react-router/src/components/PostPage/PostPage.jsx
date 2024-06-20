import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/posts";

export default function PostPage() {
  const [post, setPost] = useState({});

  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API_LINK}/${params.id}`)
      .then((response) => setPost(response.data))
      .catch((err) => alert(err.message));
  }, []);

  function handleBackButton() {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={handleBackButton}>Go back</button>
      {post.id ? (
        <>
          <p>{post.userId}</p>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

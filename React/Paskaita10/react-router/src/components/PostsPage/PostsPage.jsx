import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_LINK = "https://jsonplaceholder.typicode.com/posts";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => setPosts(response.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`}>More info</Link>
          <button onClick={() => navigate(`/post/${post.id}`)}>More info but button</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

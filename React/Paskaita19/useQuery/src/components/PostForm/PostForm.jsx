import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const API_HOST = "https://jsonplaceholder.typicode.com/posts";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isError, error } = useMutation({
    mutationFn: async (body) => {
      await axios.post(API_HOST, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isError) {
    return <h1>Some error happened while posting</h1>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const requestBody = {
      title,
      body
    }

    mutate(requestBody)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Create new post</button>
      </form>
    </div>
  );
}

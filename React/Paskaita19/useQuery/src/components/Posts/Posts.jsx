import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_HOST = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  // ------------------------------------------- Senas budas
  // const [posts, setPosts] = useState([]);
  // const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  // useEffect(() => {
  //   setIsLoadingPosts(true);
  //   axios
  //     .get(API_HOST)
  //     .then((response) => setPosts(response.data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoadingPosts(false));
  // }, []);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    retry: 1,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const response = await axios.get(API_HOST);
      return response.data;
    }
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <pre>{JSON.stringify(error.message)}</pre>
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

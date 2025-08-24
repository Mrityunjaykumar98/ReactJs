import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const FetchPost = () => {
  const [postId, setPostId] = useState(1);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
    10
  );

  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
  return (
    <>
      <h2>{JSON.stringify(data.title)}</h2>
      <button onClick={() => setPostId(1)}>Post1</button>
      <button onClick={() => setPostId(2)}>Post2</button>
      <button onClick={() => setPostId(3)}>Post3</button>
    </>
  );
};

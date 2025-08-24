import { useEffect, useState } from "react";

export function useFetch(url, retryTime) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  async function getPost() {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
    setLoading(false);
  }
  useEffect(() => {
    getPost();

    // const timeInterval = setInterval(getPost, retryTime * 1000); //polling
    // return () => clearInterval(timeInterval);
  }, [url, retryTime]);

  return { data, loading };
}

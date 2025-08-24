import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function IncreaseCount() {
    setCount(count + 1);
  }

  return {
    count,
    IncreaseCount,
  };
}

export default useCounter;

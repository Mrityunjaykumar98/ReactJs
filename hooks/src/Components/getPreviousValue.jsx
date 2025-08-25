import { useState } from "react";
import { usePrev } from "../hooks/usePrev";

export const GetPreviousValue = () => {
  const [state, setState] = useState(0);
  const prevValue = usePrev(state);
  return (
    <>
      <p>Current State is  {state}</p>
      <button onClick={() => setState((curr) => curr + 1)}>Click Me!</button>
      <p>Previous state value is  {prevValue}</p>
    </>
  );
};

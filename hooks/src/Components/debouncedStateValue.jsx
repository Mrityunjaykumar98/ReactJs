import { useEffect, useState } from "react";
import { useDebounceStateValue } from "../hooks/useDebounce";

export const DebouncedStateValue = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounceStateValue(inputValue);

  function search(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    console.log("Perform effect");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={search} />
    </>
  );
};

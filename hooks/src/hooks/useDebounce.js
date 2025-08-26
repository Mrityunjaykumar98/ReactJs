import { useEffect, useRef, useState } from "react";

export function useDebounce(runFunc, delay) {
  const currentClock = useRef();
  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(runFunc, delay);
  };

  return fn;
}

export function useDebounceStateValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const currentTime = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(currentTime);
  }, [value, delay]);

  return debouncedValue;
}

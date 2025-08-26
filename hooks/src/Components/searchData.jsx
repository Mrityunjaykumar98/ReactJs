// This is an example where making function debounced.

import { useDebounce } from "../hooks/useDebounce";

export const SearchData = () => {
  const searchData = async () => {
    await fetch("api.amazon.com/search");
  };
  const debouncedFn = useDebounce(searchData,200);

  return (
    <>
      <input type="text" onChange={debouncedFn} />
    </>
  );
};

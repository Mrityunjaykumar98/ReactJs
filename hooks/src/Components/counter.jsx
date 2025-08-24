import useCounter from "../hooks/useCounter";

export const Counter = () => {
  const { count, IncreaseCount } = useCounter();

  return (
    <>
      <button onClick={IncreaseCount}>Increase {count}</button>
    </>
  );
};

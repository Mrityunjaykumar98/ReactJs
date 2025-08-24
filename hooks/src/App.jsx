import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { count,IncreaseCount } = useCounter();
  return (
    <>
      <button onClick={IncreaseCount}>Increase {count}</button>
    </>
  );
}

export default App;

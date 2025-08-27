import "./App.css";
import { Counter } from "./Components/counter";
import { DebouncedStateValue } from "./Components/debouncedStateValue";
import { FetchPost } from "./Components/fetchPost";
import { GetPreviousValue } from "./Components/getPreviousValue";
import { SearchData } from "./Components/searchData";

function App() {
  return (
    <>
      {/* <Counter/> */}
      {/* <FetchPost/> */}
      {/* <GetPreviousValue /> */}
      {/* <SearchData /> */}
      <DebouncedStateValue/>
    </>
  );
}

export default App;

import {useState} from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const changeCounter = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <button onClick={changeCounter}> Raneem Daqa {count}</button>
    </>
  );
}

export default App;

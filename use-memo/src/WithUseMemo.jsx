import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function WithUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);
  const hello = (num) => {
    console.log("function run");
    let value = 0;
    for (let i = 0; i < 1222222320; i++) {
      value += i;
    }
    return value;
  };

  const value = useMemo(() => hello(count), [count]);

  return (
    <>
      <div>{value}</div>
          <button onClick={() => setCount(count + 1)}>Add</button>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
      <div>{count}</div>
    </>
  );
}

export default WithUseMemo;

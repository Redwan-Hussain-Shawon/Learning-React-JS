import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function WithOutUseMemo() {
  const [count, setCount] = useState(0);
  const hello = (num) => {
    console.log("function run");
    let value = 0;
    for (let i = 0; i < 1222222320; i++) {
      value += i;
    }
    return value;
  };

    const value = useMemo(() => hello(2333233),[]);

  return (
    <>
      <div>{value }</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div>{count}</div>
    </>
  );
}

export default WithOutUseMemo;

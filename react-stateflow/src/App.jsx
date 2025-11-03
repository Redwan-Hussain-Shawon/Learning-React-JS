import { useState } from "react";
import { Child } from "./Child";

const Parent = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <Child name="test" onChange={setName} />
      <p>{name}</p>
    </div>
  );
};



export default Parent;

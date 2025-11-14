import React, { useMemo, useState } from "react";

export default function Parent() {
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return { name: "redwan", age: 19 };
  }, []);
  console.log("parent");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>;
      <div>{count}</div>
      <Child user={user} />
    </div>
  );
}

const Child = React.memo(({ user }) => {
  console.log("child");
});

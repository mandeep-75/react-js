import { useState } from "react";

export const Header = () => {
  const [count, setcount] = useState(0);
  console.log(useState(0));
  function add() {
    setcount(count + 1);
  }
  function sub() {
    setcount(count - 1);
  }

  return (
    <div>
      <div className="applicatin">
        <p>{count}</p>
        <button onClick={add}>ADD</button>
        <button onClick={sub}>SUB</button>
      </div>
    </div>
  );
};

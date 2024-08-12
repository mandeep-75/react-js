import { useState } from "react";
import "./Input.css";
export function Input({ tasks, settasks }) {
  const [input, setinput] = useState("");

  const addtask = () => {
    if (input !== "") {
      const task = {
        name: input,
        id: Math.floor(Math.random() * 100000),
        done: false,
      };
      settasks([...tasks, task]);

      setinput("");
    } else {
      alert("task must atleast have one word");
    }
  };
  return (
    <div className="ko">
      <div className="inputfe">
        <input
          type="text"
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
        <button onClick={addtask}>add</button>
      </div>
    </div>
  );
}

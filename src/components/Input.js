import { useState } from "react";
import "./Input.css";
export function Input({ tasks, settasks, setdoneft, doneft }) {
  const [input, setinput] = useState("");

  const addtask = () => {
    if (input !== "") {
      const task = {
        name: input,
        id: Math.floor(Math.random() * 100000),
        done: doneft,
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
        <div>
      
          <input onChange={()=>setdoneft(false)} type="radio" name="done" id="1" />
          <label htmlFor="1">task not done</label>
          <input onChange={()=>setdoneft(true)} type="radio" name="done" id="2" />
          <label htmlFor="2">task done</label>
        </div>

        <button onClick={addtask}>add</button>
      </div>
    </div>
  );
}

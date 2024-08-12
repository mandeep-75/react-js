import { useState } from "react";
import "./Body,taskcard.css";
import { Taskcard } from "./Taskcard.js";
export const Body = ({ tasks, settasks }) => {
  const [taskscp] =useState(tasks);

  function del(id) {
    const newTask = tasks.filter((t) => t.id !== id);
    settasks(newTask);
  }
  function reset(tasks) {
    settasks(taskscp);
  }
  const [show, setshow] = useState(true);
  return (
    <div className="boody">
      <div className="main">
        <h1 className="task">tasks </h1>
        <button className="button-del" onClick={() => setshow(!show)}>
          toggle
        </button>
        <button className="button-del" onClick={() => reset(tasks)}>
          reset
        </button>
      </div>

      <ul>
        {show && tasks.map((task) => <Taskcard task={task} delwe={del} />)}
      </ul>
    </div>
  );
};

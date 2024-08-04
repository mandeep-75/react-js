import { useState } from "react";
import "./header.css";
export const Header = () => {
  const [task, setTask] = useState([
    { id: 1234, name: "mandeep singh", done: true },
    { id: 1235, name: "lololks", done: false },
    { id: 1236, name: "jdscnsiudciusd", done: true },
    { id: 1237, name: "hello world", done: false },
    { id: 1238, name: "my first task", done: false },
    { id: 1239, name: "my second task", done: true },
    { id: 1240, name: "my third task", done: false },
    { id: 1241, name: "my fourth task", done: true },
    { id: 1242, name: "my fifth task", done: false },
    { id: 1243, name: "my sixth task", done: true },
    { id: 1244, name: "my seventh task", done: false },
    { id: 1245, name: "my eighth task", done: true },
    { id: 1246, name: "my ninth task", done: false },
    { id: 1247, name: "my tenth task", done: true },
    { id: 1248, name: "my eleventh task", done: false },
    { id: 1249, name: "my twelfth task", done: true },
    { id: 1250, name: "my twelfth task", done: true },
  ]);
  function del(id) {
    const newTask = task.filter((t) => t.id !== id);
    setTask(newTask);
  }
  const [show, setshow] = useState(true);
  return (
    <div className="boody">
      <div className="main">
        <h1 className="task">tasks </h1>
        <button className="button-del" onClick={() => setshow(!show)}>
          toggle
        </button>
      </div>

      <ul>
        {show &&
          task.map((tasks) => (
            <li className="list" key={tasks.id}>
              <span>
                {tasks.name}-{tasks.id}
              </span>
              <button
                className={tasks.done ? "icom" : "com"}
                onClick={() => del(tasks.id)}
              >
                remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

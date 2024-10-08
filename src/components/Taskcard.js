import "./Body,taskcard.css";
export function Taskcard({ task, delwe }) {
  return (
    <div>
      <li className="list" key={task.id}>
        <span>
          {task.name}-{task.id}
        </span>
        <button
          className={task.done ? "com" : "icom"}
          onClick={() => delwe(task.id)}
        >
          remove
        </button>
      </li>
    </div>
  );
}

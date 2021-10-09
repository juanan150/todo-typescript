import "../assets/styles/ToDoList.css";
type taskState = {
  title: string;
  completed: boolean;
};

type TodoListProps = {
  tasks: taskState[];
  delete: (idx: number) => void;
  toggle: (idx: number) => void;
};

const TodoList = (props: TodoListProps) => {
  const handleDelete = (idx: number) => {
    props.delete(idx);
  };

  const handleToggle = (idx: number) => {
    props.toggle(idx);
  };

  return (
    <div>
      <ul>
        {props.tasks.map((task, idx) => (
          <li className="listItem" key={`${task.title}${idx}`}>
            <div className={`${task.completed === true ? "crossed" : ""}`}>
              <p onClick={() => handleToggle(idx)}>{task.title}</p>
            </div>
            <span className="deleteButton" onClick={() => handleDelete(idx)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

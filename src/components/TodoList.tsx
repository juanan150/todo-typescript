import "../assets/styles/ToDoList.css";

type TodoListProps = {
  tasks: String[];
  delete: (idx: number) => void;
};

const TodoList = (props: TodoListProps) => {
  const handleDelete = (idx: number) => {
    props.delete(idx);
  };
  return (
    <div>
      <ul>
        {props.tasks.map((task, idx) => (
          <li key={`${task}${idx}`}>
            {task}
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

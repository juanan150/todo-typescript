type TodoListProps = {
  tasks: String[];
};

const TodoList = (props: TodoListProps) => {
  return (
    <div>
      <ul>
        {props.tasks.map((task, idx) => (
          <li key={`${task}${idx}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

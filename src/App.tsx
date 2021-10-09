import { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import ToDoCreate from "./components/ToDoCreate";

type taskState = {
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<taskState[]>([]);

  const handleCreate = (task: string) => {
    setTasks(tasks => [...tasks, { title: task, completed: false }]);
  };

  const handleDelete = (idx: number) => {
    setTasks(tasks => tasks.filter((_, id) => idx !== id));
  };

  const handleToggle = (idx: number) => {
    setTasks(tasks =>
      tasks.map((task, id) =>
        idx !== id ? task : { ...task, completed: !task.completed }
      )
    );
  };

  return (
    <div className="App">
      <TodoList tasks={tasks} delete={handleDelete} toggle={handleToggle} />
      <ToDoCreate create={handleCreate}></ToDoCreate>
    </div>
  );
}

export default App;

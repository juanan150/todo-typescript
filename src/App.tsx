import { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import ToDoCreate from "./components/ToDoCreate";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleCreate = (task: string) => {
    setTasks(tasks => [...tasks, task]);
  };

  return (
    <div className="App">
      <TodoList tasks={tasks} />
      <ToDoCreate create={handleCreate}></ToDoCreate>
    </div>
  );
}

export default App;

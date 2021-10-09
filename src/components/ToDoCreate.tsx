import React, { useState } from "react";

import "../assets/styles/ToDoCreate.css";

type ToDoCreateProps = {
  create: (task: string) => void;
};

const ToDoCreate: React.FC<ToDoCreateProps> = props => {
  const [state, setstate] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate(event.target.value);
  };

  const handleSubmit = () => {
    props.create(state);
    setstate("");
  };
  return (
    <div>
      <label>Task Name </label>
      <input type="text" onChange={handleChange} value={state} />
      <button type="button" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default ToDoCreate;

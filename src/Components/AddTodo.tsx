import React, { useState } from "react";
import { addTaskProps } from "../types";

const AddTodo: React.FC<addTaskProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add Todo"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">ADD</button>
      </form>
    </>
  );
};
export default AddTodo;

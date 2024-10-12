import React, { useState } from "react";
import { ItemTodoProps, ListTodoProps } from "../types";

const ItemList: React.FC<ItemTodoProps> = ({
  task,
  editItem,
  changeCompletion,
  deleteItem,
}) => {
  // let editIsOn = false;
  const [newTask, setNewTask] = useState<string>("");
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => changeCompletion(task.id)}
        ></input>
        {isEditOn ? (
          <>
            <input
              placeholder="Input Todo"
              value={newTask || task.todo}
              onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <button
              onClick={(e) => {
                editItem(task.id, newTask);
                setIsEditOn(false);
              }}
            >
              SAVE
            </button>
          </>
        ) : (
          <>
            <span>{task.todo}</span>
            <button onClick={() => setIsEditOn(true)}>EDIT</button>
          </>
        )}
        <button onClick={() => deleteItem(task.id)}>DELETE</button>
      </li>
    </>
  );
};
export default ItemList;

import React from "react";
import { ListTodoProps, Task } from "../types";
import ItemList from "./ItemList";
// interface ListTodoProps {
//   task: Task[];
//   editTask: (id: number) => void;
//   changeCompletion: boolean;
//   deleteTask: (id: number) => void;
// }

export const ListTodo: React.FC<ListTodoProps> = ({
  task,
  editItem,
  changeCompletion,
  deleteItem,
}) => {
  return (
    <>
      <ul>
        {task.map((item, i, arr) => {
          return (
            <ItemList
              task={item}
              editItem={editItem}
              changeCompletion={changeCompletion}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    </>
  );
};

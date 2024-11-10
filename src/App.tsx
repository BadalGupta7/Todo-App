import React, { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import FilterTodo from "./Components/FilterTodo";
import { ListTodo } from "./Components/ListTodo";
import { Task } from "./types";

const App: React.FC = () => {
  // hI
  const [todoList, setTodoList] = useState<Task[]>(
    JSON.parse(localStorage.getItem("todosList") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todoList));
  }, [todoList]);

  const addItem = (newTodo: string) => {
    setTodoList([
      ...todoList,
      { id: Date.now(), todo: newTodo, completed: false },
    ]);
  };

  const editItem = (id: number, editedTodo: string) => {
    setTodoList(
      todoList.map((each, i, arr) =>
        each.id === id ? { ...each, todo: editedTodo } : each
      )
    );
  };
  const changeCompletion = (id: number) => {
    setTodoList(
      todoList.map((each, i, arr) =>
        each.id === id ? { ...each, completed: !each.completed } : each
      )
    );
  };

  const deleteItem = (id: number) => {
    setTodoList(todoList.filter((each, i, arr) => each.id !== id));
  };

  const [filter, setFilter] = useState<string>("");

  const filteredItems = todoList.filter((task, i, arr) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });
  //HI
  //MAIN
  //BI
  //AGAIN HI
  //HI AGAIN AGAIN
  //AFTER MERGE

  return (
    <>
      <div>TODO</div>
      <AddTodo addTask={addItem} />
      <FilterTodo setFilter={setFilter} />
      <ListTodo

        task={filteredItems}
        editItem={editItem}
        changeCompletion={changeCompletion}
        deleteItem={deleteItem} 
        
      />
    </>
  );
};
export default App;

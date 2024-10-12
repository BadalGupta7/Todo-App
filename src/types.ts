export interface Task {
  id: number;
  todo: string;
  completed: boolean;
}

export interface ListTodoProps {
  task: Task[];
  editItem: (id: number, editedTodo: string) => void;
  changeCompletion: (id: number) => void;
  deleteItem: (id: number) => void;
}

export interface ItemTodoProps {
  task: Task;
  editItem: (id: number, editedTodo: string) => void;
  changeCompletion: (id: number) => void;
  deleteItem: (id: number) => void;
}
export interface addTaskProps {
  addTask: (task: string) => void;
}

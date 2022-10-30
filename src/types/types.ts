export type Todo = {
  text: string;
  status: boolean;
  active?: string;
};

export type ToggleComplete = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;

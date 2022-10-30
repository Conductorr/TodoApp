import React from "react";
import { Todo, ToggleComplete } from "types/types";
import TodoForm from "../TodoForm/TodoForm";

interface ListTodo {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

function ListTodo({ todos, toggleComplete }: ListTodo) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoForm todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
}

export default ListTodo;

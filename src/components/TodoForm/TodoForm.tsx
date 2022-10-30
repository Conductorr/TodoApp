import React from "react";
import { Todo, ToggleComplete } from "types/types";
import styles from "./TodoForm.module.scss";

interface TodoFromItem {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

function TodoForm({ todo, toggleComplete }: TodoFromItem) {
  return (
    <form className={styles.container}>
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.status}
      />
      <h1 className={todo.status ? styles.complete : undefined}>{todo.text}</h1>
    </form>
  );
}

export default TodoForm;

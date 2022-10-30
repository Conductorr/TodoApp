import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./AddTodoForm.module.scss";

interface AddTodoProps {
  addTodo: (newTodo: string) => void;
}

function AddTodoForm({ addTodo }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.form_input}
        type="text"
        value={newTodo}
        placeholder="New todo..."
        onChange={handleChange}
      />
      <button
        className={styles.form_button}
        type="submit"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;

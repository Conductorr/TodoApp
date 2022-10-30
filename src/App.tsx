import React, { useState, useEffect, memo } from "react";
import { AddTodoForm, ListTodo } from "./components";
import { Todo, ToggleComplete, AddTodo } from "types/types";
import "./styles/App.scss";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [filteredTodos, setFilteredTodos] = useState<Array<Todo>>(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, status: false }]);
  };

  const all = () => {
    setFilteredTodos(todos);
  };

  const active = () => {
    setFilteredTodos(todos.filter((todos) => !todos.status));
  };

  const completed = () => {
    setFilteredTodos(todos.filter((todos) => todos.status));
  };

  const clear = () => {
    setTodos(todos.filter((todos) => !todos.status));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="container-heading">todos</h1>
        <div className="container-main">
          <AddTodoForm addTodo={addTodo} />
          <div className="container-main-todos">
            <ListTodo todos={filteredTodos} toggleComplete={toggleComplete} />
          </div>
        </div>
        <div className="container-footer">
          <div>
            <span className="container-footer__heading">{`${filteredTodos.length} items left`}</span>
          </div>
          <div className="container-footer-buttons">
            <button className="container-footer__button" onClick={() => all()}>
              All
            </button>
            <button
              className="container-footer__button"
              onClick={() => active()}
            >
              Active
            </button>
            <button
              className="container-footer__button"
              onClick={() => completed()}
            >
              Completed
            </button>
          </div>
          <div className="container-footer-bottom">
            <button
              id="test-btn"
              className="container-footer-bottom__button"
              onClick={() => clear()}
            >
              Clear completed
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="testing"></div>
        <div className="testing-footer"></div>
      </div>
    </div>
  );
}

export default memo(App);

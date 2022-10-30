import App from "./App";
import { render, getByTestId, fireEvent, screen } from "@testing-library/react";

export const addTodo = (list: Array<object>, item: object) => [item, ...list];

export const deleteTodo = jest.fn();

test("Render without crashing", () => {
  render(<App />);
});

describe("addTodo", () => {
  it("should add todo to the list", () => {
    const startTodos = [
      { id: 1, name: "Тестовое задание", isComplete: false },
      { id: 2, name: "Покрыть тестами", isComplete: false },
    ];

    const newTodo = { id: 3, name: "Сделать UI", isComplete: false };
    const expected = [
      { id: 3, name: "Сделать UI", isComplete: false },
      { id: 1, name: "Тестовое задание", isComplete: false },
      { id: 2, name: "Покрыть тестами", isComplete: false },
    ];
    const result = addTodo(startTodos, newTodo);
    expect(result).toEqual(expected);
  });
});

import { describe, expect, jest } from "@jest/globals";
import todoReducer, { addTodo, removeTodo, toggleTodo } from "../todoSlice";

const mockedInitialState = {
  todos: [{ id: 2147, content: "Make todo-list", checked: true }],
};

describe("Testing tododSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = todoReducer(undefined, { type: "" });
    expect(result).toEqual(mockedInitialState);
  });

  it("Should add new task with 'addTodo' action", () => {
    const action = {
      type: addTodo.type,
      payload: { content: "Redux testing" },
    };

    const result = todoReducer(mockedInitialState, action);
    expect(result.todos[1].content).toBe("Redux testing");
    expect(result.todos[1].checked).toBe(false);
  });

  it("Should toggle task checked status with 'toggleTodo' action", () => {
    const todo = {
      id: 31081143,
      content: "Check toggle status",
      checked: false,
    };
    const action = {
      type: toggleTodo.type,
      payload: 31081143,
    };
    mockedInitialState.todos.push(todo);
    const result = todoReducer(mockedInitialState, action);
    expect(result.todos[1].checked).toBe(true);
  });

  it("Should remove todo by id with 'removeTodo' action ", () => {
    const todo = {
      id: 31081541,
      content: "Check remove task",
      checked: false,
    };
    const action = {
      type: removeTodo.type,
      payload: 31081541,
    };
    mockedInitialState.todos.push(todo);
    const result = todoReducer(mockedInitialState, action);
    expect(result.todos.length).toEqual(2);
    expect(result.todos).not.toContainEqual(todo);
  });
});

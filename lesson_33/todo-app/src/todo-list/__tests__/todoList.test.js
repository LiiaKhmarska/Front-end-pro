import { screen, render, toMatchSnapshot } from "@testing-library/react";
import { describe, expect, jest } from "@jest/globals";
import { TodoList } from "../TodoList";
import { useSelector } from "react-redux";

jest.mock("react-redux");

const mockedInitialState = {
  todos: [{ id: 2147, content: "Make todo-list", checked: true }],
};

describe("todo list", () => {
  it("Should create todo list with defult todo ", () => {
    useSelector.mockReturnValue(mockedInitialState.todos);
    const component = render(<TodoList />);
    expect(component).toMatchSnapshot();
  });

  it("Should have heading TODO ", () => {
    render(<TodoList />);
    const h3 = screen.getByRole("heading", { level: 3 });
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent(/todo/i);
  });

  it("Should have heading 'All your todos' ", () => {
    render(<TodoList />);
    const h4 = screen.getByRole("heading", { level: 4 });
    expect(h4).toBeInTheDocument();
    expect(h4).toHaveTextContent(/todo/i);
  });

  it("should have list of todos", () => {
    render(<TodoList />);
    const listItem = screen.queryByTestId("todo-list");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent(/todo/i);
  });

  it('Should have "Total" for count todos', () => {
    render(<TodoList />);
    const total = screen.queryByTestId("todo-counter");
    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent("Total:");
  });
});

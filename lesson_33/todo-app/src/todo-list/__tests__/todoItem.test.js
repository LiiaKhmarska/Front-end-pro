import * as reduxHooks from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import * as actions from "../../store/todoSlice";
import { describe, expect, jest } from "@jest/globals";
import { TodoItem } from "../TodoItem";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);
const user = userEvent.setup();

jest.mock("react-redux");
const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("Test todo item", () => {
  const todo = {
    id: "31081835",
    content: "Make todo-lisCheck todo item",
    checked: true,
  };

  it("should create todo item", () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    const component = render(<TodoItem todo={todo} />);
    expect(component).toMatchSnapshot();
    expect(mockedDispatch).toHaveBeenCalled();
  });

  it("should have delete button", () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    render(<TodoItem todo={todo} />);
    // const todo = screen.getByText("Make todo-list");
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("should have checkbox", () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    render(<TodoItem todo={todo} />);
    const todo = screen.getByText("Make todo-list");
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("should dispatch toggle action", async () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    const mockedToggle = jest.spyOn(actions, "toggleTodo");
    render(<TodoItem todo={todo} />);
    const checkbox = screen.getByRole("checkbox");
    // expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    // expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedToggle).toHaveBeenCalledWith("31081835");
    // expect(checkbox).toBeChecked();
  });

  it("should dispatch delete action", async () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    const mockedRemove = jest.spyOn(actions, "removeTodo");
    render(<TodoItem todo={todo} />);
    const btn = screen.getByRole("button");
    await user.click(btn);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedRemove).toHaveBeenCalledWith("31081835");
  });
});

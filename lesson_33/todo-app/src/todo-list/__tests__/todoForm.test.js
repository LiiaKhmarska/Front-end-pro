import { render, screen, cleanup, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, jest } from "@jest/globals";
import { TodoForm } from "../TodoForm";

import * as reduxHooks from "react-redux";
import * as actions from "../../store/todoSlice";

afterEach(cleanup);
const user = userEvent.setup();

jest.mock("react-redux");
const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("Add button test", () => {
  it("render Add button text correctly", () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    render(<TodoForm />);
    const btnAdd = screen.getByTestId("btn-add");
    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd).toHaveTextContent("Add Task");
  });

  it("call onClick Add button", async () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    const mockedAddTodo = jest.spyOn(actions, "addTodo");

    render(<TodoForm />);
    // const btnAdd = screen.getByTestId("btn-add");
    const btnAdd = screen.getByText("Add Task");
    await user.click(btnAdd);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedAddTodo).toHaveBeenCalled();
  });

  it("Should component 'input' be present", async () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    render(<TodoForm />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("");
  });

  it("Should component 'input' have placeholder", async () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    render(<TodoForm />);
    const placeHolder = screen.getByPlaceholderText("Add task");
    expect(placeHolder).toBeInTheDocument();
  });

  it("Should  typing in input correctly", async () => {
    mockedDispatch.mockResolvedValue(jest.fn());

    render(<TodoForm />);
    const input = screen.getByRole("textbox");
    await user.type(input, "testing react app");
    expect(screen.queryByDisplayValue("testing react app")).toBeInTheDocument();
    expect(input.value).toBe("testing react app");
  });
});

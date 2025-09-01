import { render, getByTestId } from "@testing-library/react";
import { describe, expect, jest } from "@jest/globals";
import { TodoCounter } from "../TodoCounter";
import { useSelector } from "react-redux";

jest.mock("react-redux");

const mockedInitialState = {
  todos: [{ id: 2147, content: "Make todo-list", checked: true }],
};

describe("Todo Counter render correctly", () => {
  it("todo counter present with default value", () => {
    useSelector.mockReturnValue(mockedInitialState.todos);
    const counter = render(<TodoCounter />);
    expect(counter).toMatchSnapshot();
  });
});

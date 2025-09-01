import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, jest } from "@jest/globals";
import { TodoForm } from "../TodoForm";
import { store } from "../../store/store";
import { Provider } from "react-redux";

// const mockDispatch = jest.fn();

afterEach(cleanup);
const mockedClicklHandler = jest.fn();
// const user = userEvent.setup();

describe("Add button test", () => {
  it("render Add button text correctly", () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
    // jest.mock("react-redux", () => {
    //   useDispatch: () => mockDispatch();
    // });
    const btnAdd = screen.getByTestId("btn-add");
    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd).toHaveTextContent("Add Task");
  });

  it("call onClick Add button", async () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
    const btnAdd = screen.getByTestId("btn-add");
    // fireEvent.click(btnAdd);
    await userEvent.click(btnAdd);
    expect(mockedClicklHandler).toHaveBeenCalled();
    // expect(mockedClicklHandler).toHaveBeenCalledTimes(1);
  });

  it("Should component 'input' be presrnt", async () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("Should  typing in input correctly", async () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "testing react app");
    expect(
      screen.queryAllByDisplayValue("testing react app")
    ).toBeInTheDocument();
  });
});

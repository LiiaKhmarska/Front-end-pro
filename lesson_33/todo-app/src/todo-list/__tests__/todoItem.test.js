import * as reduxHooks from "react-redux";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import * as action from "../../store/todoSlice";
import { describe, expect, jest } from "@jest/globals";
import { TodoItem } from "../TodoItem";

describe("Test todo item", () => {
  it("should create todo item", () => {
    const todo = {
      id: 31081835,
      content: "Make todo-lisCheck todo item",
      checked: false,
    };
    const component = render(
      <Provider store={store}>
        <TodoItem todo={todo} />;
      </Provider>
    );
    expect(component).toMatchSnapshot();
    // expect(mockedDispatch).toHaveBeenCalled();
  });
});

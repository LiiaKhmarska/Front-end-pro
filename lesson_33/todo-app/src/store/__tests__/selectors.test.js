import { describe, expect, jest } from "@jest/globals";
import { selectTodos } from "../selectors";

describe("Test redux selectors", () => {
  it("Select todos from state is correct", () => {
    const todos = [
      { id: 2147, content: "Make tests for application", checked: true },
    ];
    const result = selectTodos({ todos: todos });
    expect(result).toEqual(todos);
  });
});

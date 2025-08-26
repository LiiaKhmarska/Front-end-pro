import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 2147, content: "Make todo-list" }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
      };
      state.todos.push(newTodo);
    },
    todoCount: (state) => {
      state.todoCounter = state.todoCounter + 1;
    },
  },
  selectors: {
    selectTodos: (state) => state.todos,
  },
});

export const { addTodo, todoCount } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;

export default todoSlice.reducer;

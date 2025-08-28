import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 2147, content: "Make todo-list" }],
  todoCounter: 1,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    todoCount: (state, action) => {
      state.todoCounter = state.todoCounter + +action.payload;
    },
  },
  selectors: {
    selectTodo: (state) => state.todos,
  },
});

export const { addTodo, todoCount, removeTodo } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;

export default todoSlice.reducer;

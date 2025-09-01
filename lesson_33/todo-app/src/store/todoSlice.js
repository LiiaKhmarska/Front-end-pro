import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 2147, content: "Make todo-list", checked: true }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
        checked: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((item) => item.id === id);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
  },
  selectors: {
    selectTodos: (state) => state.todos,
  },
});

export const { addTodo, todoCount, removeTodo, toggleTodo } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;

export default todoSlice.reducer;

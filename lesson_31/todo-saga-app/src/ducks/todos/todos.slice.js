import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_ADD,
} from "./todos.actions";

const initialState = {
  todos: [],
  status: null,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducerPath: "todosSaga",
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
      };
      state.todos.push(newTodo);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FETCH_TODOS_LOADING, (state) => {
        state.status = "loading";
      })
      .addCase(FETCH_TODOS_SUCCESS, (state, action) => {
        state.status = "success";
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(FETCH_TODOS_ERROR, (state, action) => {
        state.status = "error";
        state.todos = [];
        state.error = action.payload;
      })
      .addCase(FETCH_TODOS_ADD, (state, action) => {
        state.status = "success";
        state.error = null;
        // const newTodo = {
        //   id: Date.now(),
        //   content: action.payload.content,
        // };
        // console.log("newTodo", newTodo);

        // state.todos.push(newTodo);
      });
  },
  selectors: {
    selectTodos: (state) => state.todos,
    selectStatus: (state) => state.status,
  },
});

export const { addTodo, todoCount } = todoSlice.actions;
export const { selectTodos, selectStatus } = todoSlice.selectors;

export default todoSlice.reducer;

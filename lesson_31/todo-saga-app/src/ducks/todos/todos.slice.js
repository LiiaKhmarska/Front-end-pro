import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_ERROR,
  DELETE_TODOS_LOADING,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_ERROR,
  PUT_TODOS_LOADING,
  PUT_TODOS_SUCCESS,
  PUT_TODOS_ERROR,
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
  reducers: {},
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
      .addCase(ADD_TODOS_LOADING, (state) => {
        state.status = "loading";
      })
      .addCase(ADD_TODOS_SUCCESS, (state, action) => {
        state.status = "success";
        state.error = null;
      })
      .addCase(ADD_TODOS_ERROR, (state, action) => {
        state.status = "error";
        state.todos = [];
        state.error = action.payload;
      })
      .addCase(DELETE_TODOS_LOADING, (state) => {
        state.status = "loading";
      })
      .addCase(DELETE_TODOS_SUCCESS, (state, action) => {
        state.status = "success";
        state.error = null;
      })
      .addCase(DELETE_TODOS_ERROR, (state, action) => {
        state.status = "error";
        state.todos = [];
        state.error = action.payload;
      })
      .addCase(PUT_TODOS_LOADING, (state) => {
        state.status = "loading";
      })
      .addCase(PUT_TODOS_SUCCESS, (state, action) => {
        state.status = "success";
        state.error = null;
      })
      .addCase(PUT_TODOS_ERROR, (state, action) => {
        state.status = "error";
        state.todos = [];
        state.error = action.payload;
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

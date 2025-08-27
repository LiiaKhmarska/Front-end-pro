import { createAction } from "@reduxjs/toolkit";

export const FETCH_TODOS = createAction("todos/fetch-todos");
export const FETCH_TODOS_LOADING = createAction("todos/fetch-todos/loading");
export const FETCH_TODOS_SUCCESS = createAction("todos/fetch-todos/succes");
export const FETCH_TODOS_ERROR = createAction("todos/fetch-todos/error");

export const ADD_TODOS = createAction("todos/add-todos");
export const ADD_TODOS_LOADING = createAction("todos/add-todos/loading");
export const ADD_TODOS_SUCCESS = createAction("todos/add-todos/success");
export const ADD_TODOS_ERROR = createAction("todos/add-todos/error");

import { createAction } from "@reduxjs/toolkit";

export const FETCH_TODOS = createAction("todos/fetch-todos");
export const FETCH_TODOS_LOADING = createAction("todos/fetch-todos/loading");
export const FETCH_TODOS_SUCCESS = createAction("todos/fetch-todos/succes");
export const FETCH_TODOS_ERROR = createAction("todos/fetch-todos/error");
export const FETCH_TODOS_ADD = createAction("todos/fetch-todos/add");

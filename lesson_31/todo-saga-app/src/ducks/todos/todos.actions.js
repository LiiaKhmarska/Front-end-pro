import { createAction } from "@reduxjs/toolkit";

export const FETCH_TODOS = createAction("todos/fetch-todos");
export const FETCH_TODOS_LOADING = createAction("todos/fetch-todos/loading");
export const FETCH_TODOS_SUCCESS = createAction("todos/fetch-todos/succes");
export const FETCH_TODOS_ERROR = createAction("todos/fetch-todos/error");

export const ADD_TODOS = createAction("todos/add-todos");
export const ADD_TODOS_LOADING = createAction("todos/add-todos/loading");
export const ADD_TODOS_SUCCESS = createAction("todos/add-todos/success");
export const ADD_TODOS_ERROR = createAction("todos/add-todos/error");

export const DELETE_TODOS = createAction("todos/delete-todos");
export const DELETE_TODOS_LOADING = createAction("todos/delete-todos/loading");
export const DELETE_TODOS_SUCCESS = createAction("todos/delete-todos/success");
export const DELETE_TODOS_ERROR = createAction("todos/delete-todos/error");

export const PUT_TODOS = createAction("todos/PUT-todos");
export const PUT_TODOS_LOADING = createAction("todos/put-todos/loading");
export const PUT_TODOS_SUCCESS = createAction("todos/put-todos/success");
export const PUT_TODOS_ERROR = createAction("todos/put-todos/error");

import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchAllTodos, fetchAddTodo } from "../../api/";

import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS,
  ADD_TODOS,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_ERROR,
} from "./todos.actions";

export function* fetchTodosSaga({ payload }) {
  yield put(FETCH_TODOS_LOADING());
  try {
    const data = yield call(fetchAllTodos, payload);
    yield put(FETCH_TODOS_SUCCESS(data));
  } catch (error) {
    yield put(FETCH_TODOS_ERROR(JSON.stringify(error)));
  }
}

export function* addTodoSaga({ payload }) {
  yield put(ADD_TODOS_LOADING());

  try {
    yield call(fetchAddTodo, payload);
    yield put(ADD_TODOS_SUCCESS(payload));
  } catch (error) {
    yield put(ADD_TODOS_ERROR(JSON.stringify(error)));
  }
}

export function* watchFetchTodosSagas() {
  yield takeEvery(FETCH_TODOS.type, fetchTodosSaga);
  yield takeEvery(ADD_TODOS.type, addTodoSaga);
}

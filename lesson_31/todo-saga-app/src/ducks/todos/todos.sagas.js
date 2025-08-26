import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchAllTodos, fetchAddTodo } from "../../api/";

import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS,
  FETCH_TODOS_ADD,
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
  yield put(FETCH_TODOS_LOADING());

  try {
    yield call(fetchAddTodo, payload);
    yield put(FETCH_TODOS_ADD());
  } catch (error) {
    yield put(FETCH_TODOS_ERROR(JSON.stringify(error)));
  }
}

export function* watchFetchTodosSagas() {
  yield takeEvery(FETCH_TODOS.type, fetchTodosSaga);
  yield takeEvery(FETCH_TODOS_ADD, addTodoSaga);
}

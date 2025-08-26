import { all } from "redux-saga/effects";
import { watchFetchTodosSagas } from "./todos/todos.sagas";

export function* rootSaga() {
  yield all([watchFetchTodosSagas()]);
}

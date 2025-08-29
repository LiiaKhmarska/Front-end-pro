import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSagaReducer from "./todos/todos.slice.js";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todosSaga: userSagaReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serialzableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

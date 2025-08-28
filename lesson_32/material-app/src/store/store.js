import { configureStore } from "@reduxjs/toolkit";

import { dataUser } from "./userSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    user: dataUser,
    todos: todoReducer,
  },
});

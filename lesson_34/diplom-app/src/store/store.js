import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import goodsReducer from "./goodsSlice";
import { loadState, saveState } from "../utilits/localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    user: userReducer,
    goods: goodsReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

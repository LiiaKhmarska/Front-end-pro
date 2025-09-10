import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { dataGoods } from "./goodsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    goods: dataGoods,
  },
});

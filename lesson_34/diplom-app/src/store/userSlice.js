import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isLogin: false,
    login: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user.isLogin = true;
      state.user.login = action.payload;
    },
    logoutUser: (state) => {
      state.user.isLogin = false;
      state.user.login = "";
    },
  },
  selectors: {
    selectUser: (state) => state.user,
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const { selectUser } = userSlice.selectors;

export default userSlice.reducer;

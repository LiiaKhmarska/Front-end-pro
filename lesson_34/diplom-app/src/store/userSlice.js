import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.login = action.payload;
    },
    logoutUser: (state) => {
      state.login = undefined;
    },
    set: (state, action) => {
      state.login = action.payload;
    },
  },
  selectors: {
    selectUser: (state) => state.login,
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const { selectUser } = userSlice.selectors;

export default userSlice.reducer;

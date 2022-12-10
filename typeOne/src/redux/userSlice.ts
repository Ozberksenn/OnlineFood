import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    signIn: (state, action) => {
      state.userInfo = action.payload;
      console.log("signIn:", action.payload);
    },
    logout: (state, action) => {
      state.userInfo = action.payload;
      console.log("logout:", action.payload);
    },
    update: (state, action) => {
      state.userInfo = action.payload;
      console.log("update", action.payload);
    },
  },
});

export const { signIn, logout, update } = userSlice.actions;

export default userSlice.reducer;

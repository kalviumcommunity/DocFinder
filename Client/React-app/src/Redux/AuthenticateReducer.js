import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "isAuthenticated",
  initialState: {
    isAuthenticated : false,
  },
  reducers: {
    ShowLogin: (state) => {
      state.isAuthenticated = false;
    },
    HideLogin: (state) => {
      state.isAuthenticated = true;
    },
  }, 
});
 
export const { ShowLogin, HideLogin } = AuthSlice.actions;

export default AuthSlice.reducer;

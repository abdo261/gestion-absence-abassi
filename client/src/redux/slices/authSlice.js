import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    Loading: false,
    error: null,
  },
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.Loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logoutUser(state,action){
      state.user=action.payload
 
    }
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export { authActions, authReducer };

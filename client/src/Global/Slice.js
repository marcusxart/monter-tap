import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    Token: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setToken: (state, action) => {
      state.Token = action.payload;
    },
  },
});

export const { setUser, removeUser, setToken } = MySlice.actions;
export default MySlice.reducer;

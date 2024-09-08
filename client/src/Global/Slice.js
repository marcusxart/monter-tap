import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
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

export const { setUser, removeUser, setToken } = Slice.actions;
export default Slice.reducer;

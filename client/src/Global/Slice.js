import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: null, // Add user id
      account: {
        coinCount: 0,
        bonus: 0,
      },
    },
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
    incrementCoin: (state) => {
      // Increment the coin count inside the account object
      if (state.user.account) {
        state.user.account.coinCount += 1;
      }
    },
    addedBonus: (state, action) => {
      state.user.account.bonus = action.payload;
    },
  },
});

export const { setUser, removeUser, setToken, incrementCoin, addedBonus } =
  MySlice.actions;
export default MySlice.reducer;

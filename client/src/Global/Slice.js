import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: null,
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
      if (state.user.account) {
        state.user.account.coinCount += 1;
      }
    },
    setCoinCount: (state, action) => {
      if (state.user.account) {
        state.user.account.coinCount = action.payload;
      }
    },
    addedBonus: (state, action) => {
      state.user.account.bonus = action.payload;
    },
  },
});

export const {
  setUser,
  removeUser,
  setToken,
  incrementCoin,
  setCoinCount,
  addedBonus,
} = MySlice.actions;
export default MySlice.reducer;

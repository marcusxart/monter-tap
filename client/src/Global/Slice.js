import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: null, // Add user id
      account: {
        coinCount: 0, // Add initial coin count inside account object
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
  },
});

export const { setUser, removeUser, setToken, incrementCoin } = MySlice.actions;
export default MySlice.reducer;

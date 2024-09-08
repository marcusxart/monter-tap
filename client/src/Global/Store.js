import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./Slice";

const store = configureStore({
  reducer: SliceReducer,
});

export default store;

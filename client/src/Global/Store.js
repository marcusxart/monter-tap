import { configureStore } from "@reduxjs/toolkit";
import MySliceReducer from "./Slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, MySliceReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer, // Directly pass the persisted reducer
});

// Create a persistor
export const persistor = persistStore(store);

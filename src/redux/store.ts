import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./arraySlice";
import apiReducer from "./apiSlice";

export const store = configureStore({
  reducer: {
    structure: arrayReducer,
    api: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

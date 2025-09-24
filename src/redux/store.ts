
import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./arraySlice";


export const store = configureStore({
  reducer: {
    structure : arrayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

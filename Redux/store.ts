// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/token";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Types for useDispatch & useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
